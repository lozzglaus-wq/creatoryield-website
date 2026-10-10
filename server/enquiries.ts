import { eq } from "drizzle-orm";
import type { Express } from "express";
import { enquiries } from "../drizzle/schema";
import { getDb } from "./db";
import { notifyOwner } from "./_core/notification";
import { enquirySchema } from "./enquiryValidation";

const limits = new Map<string, { count: number; expiresAt: number }>();

export function registerEnquiryRoutes(app: Express) {
  app.post("/api/enquiries", async (req, res) => {
    const parsed = enquirySchema.safeParse(req.body);
    if (!parsed.success) {
      res
        .status(400)
        .json({
          success: false,
          message:
            "Please check your name, email, profile address and consent.",
        });
      return;
    }
    if (parsed.data.website) {
      res
        .status(400)
        .json({
          success: false,
          message: "We couldn’t send this enquiry. Please try again.",
        });
      return;
    }
    const now = Date.now();
    for (const [key, value] of limits)
      if (value.expiresAt <= now) limits.delete(key);
    const key = req.ip || req.socket.remoteAddress || "unknown";
    const previous = limits.get(key);
    if (previous && previous.count >= 8) {
      res.set(
        "Retry-After",
        String(Math.ceil((previous.expiresAt - now) / 1000))
      );
      res
        .status(429)
        .json({
          success: false,
          message:
            "You’ve sent several enquiries. Please give us a little time and try again later.",
        });
      return;
    }
    if (limits.size > 10000) {
      res
        .status(503)
        .json({
          success: false,
          message:
            "We’re receiving a lot of enquiries. Please try again shortly.",
        });
      return;
    }
    limits.set(key, {
      count: (previous?.count || 0) + 1,
      expiresAt: previous?.expiresAt || now + 3600000,
    });
    try {
      const db = await getDb();
      if (!db) throw new Error("Enquiry storage is unavailable");
      const { requestId, name, email, channelUrl, message } = parsed.data;
      const existing = await db
        .select({ id: enquiries.id })
        .from(enquiries)
        .where(eq(enquiries.requestId, requestId))
        .limit(1);
      if (existing.length) {
        res.json({ success: true });
        return;
      }
      await db
        .insert(enquiries)
        .values({ requestId, name, email, channelUrl, message, consent: true });
      res.status(201).json({ success: true });
      void notifyOwner({
        title: "New CreatorYield enquiry",
        content: `Name: ${name}\nEmail: ${email}\nChannel: ${channelUrl}\n\n${message || "No additional message."}`,
      }).catch(error =>
        console.warn(
          "Enquiry stored, but notification was not accepted:",
          error instanceof Error ? error.message : "Unknown error"
        )
      );
    } catch (error) {
      if (
        error instanceof Error &&
        "code" in error &&
        error.code === "ER_DUP_ENTRY"
      ) {
        res.json({ success: true });
        return;
      }
      console.error(
        "Enquiry storage failed:",
        error instanceof Error ? error.message : "Unknown error"
      );
      res
        .status(503)
        .json({
          success: false,
          message:
            "We couldn’t safely save your enquiry. Please try again in a moment.",
        });
    }
  });
}

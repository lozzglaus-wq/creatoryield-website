import { z } from "zod";

export const enquirySchema = z.object({
  requestId: z.string().uuid(),
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  channelUrl: z
    .string()
    .trim()
    .url()
    .max(500)
    .refine(value => {
      const url = new URL(value);
      return (
        ["https:", "http:"].includes(url.protocol) &&
        !url.username &&
        !url.password
      );
    }, "Please use a public website address."),
  message: z.string().trim().max(2000).default(""),
  website: z.string().max(200).default(""),
  consent: z.literal(true),
});

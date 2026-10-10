import { describe, expect, it } from "vitest";
import { enquirySchema } from "./enquiryValidation";

const valid = {
  requestId: "76b0dd43-b5d8-48d7-b747-b896e6d42d14",
  name: "Alex Creator",
  email: "alex@example.com",
  channelUrl: "https://youtube.com/@alex",
  message: "A shop for my audience.",
  website: "",
  consent: true,
};

describe("Creator enquiry validation", () => {
  it("accepts a valid public profile and contact details", () => {
    expect(enquirySchema.safeParse(valid).success).toBe(true);
  });
  it("requires consent", () => {
    expect(enquirySchema.safeParse({ ...valid, consent: false }).success).toBe(
      false
    );
  });
  it("rejects invalid email addresses", () => {
    expect(
      enquirySchema.safeParse({ ...valid, email: "not an email" }).success
    ).toBe(false);
  });
  it("rejects executable or non web profile addresses", () => {
    expect(
      enquirySchema.safeParse({ ...valid, channelUrl: "javascript:alert(1)" })
        .success
    ).toBe(false);
    expect(
      enquirySchema.safeParse({ ...valid, channelUrl: "ftp://example.com" })
        .success
    ).toBe(false);
  });
  it("rejects credentials in profile URLs", () => {
    expect(
      enquirySchema.safeParse({
        ...valid,
        channelUrl: "https://user:password@example.com",
      }).success
    ).toBe(false);
  });
  it("rejects oversized text", () => {
    expect(
      enquirySchema.safeParse({ ...valid, message: "x".repeat(2001) }).success
    ).toBe(false);
  });
  it("trims contact information", () => {
    expect(
      enquirySchema.parse({ ...valid, name: "  Alex Creator  " }).name
    ).toBe("Alex Creator");
  });
  it("requires an idempotency key", () => {
    expect(
      enquirySchema.safeParse({ ...valid, requestId: "123" }).success
    ).toBe(false);
  });
});

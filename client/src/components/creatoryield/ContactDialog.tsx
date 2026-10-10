import { useRef, useState, type FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Check, Loader2, X } from "lucide-react";

export default function ContactDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");
  const requestId = useRef<string | null>(null);

  function changeOpen(nextOpen: boolean) {
    if (!nextOpen && status === "sending") return;
    if (!nextOpen) {
      setStatus("idle");
      setError("");
      requestId.current = null;
    }
    onOpenChange(nextOpen);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    requestId.current ??= crypto.randomUUID();
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestId: requestId.current,
          name: data.get("name"),
          email: data.get("email"),
          channelUrl: data.get("channelUrl"),
          message: data.get("message"),
          website: data.get("website"),
          consent: data.get("consent") === "on",
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success)
        throw new Error(
          result.message || "We couldn’t send your enquiry. Please try again."
        );
      setStatus("success");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "We couldn’t send your enquiry. Please try again."
      );
      setStatus("error");
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={changeOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="contact-dialog">
          <Dialog.Close className="dialog-close" aria-label="Close enquiry">
            <X size={22} />
          </Dialog.Close>
          {status === "success" ? (
            <div className="contact-success" role="status">
              <span className="success-icon">
                <Check size={28} />
              </span>
              <Dialog.Title>Your next chapter starts here.</Dialog.Title>
              <Dialog.Description>
                Thanks for telling us about your channel. Your enquiry is safely
                with CreatorYield. We’ll be in touch using the email you shared.
              </Dialog.Description>
              <button className="action" onClick={() => changeOpen(false)}>
                Back to CreatorYield
                <ArrowUpRight size={18} />
              </button>
            </div>
          ) : (
            <>
              <p className="eyebrow">A CONVERSATION, NOT A COMMITMENT</p>
              <Dialog.Title>
                Let’s build something <em>that’s yours.</em>
              </Dialog.Title>
              <Dialog.Description>
                Tell us a little about you and your audience. We’ll take a look
                at where a shop could fit.
              </Dialog.Description>
              <form onSubmit={submit} className="contact-form">
                <div className="form-pair">
                  <label>
                    Your name
                    <input
                      name="name"
                      autoComplete="name"
                      required
                      minLength={2}
                      maxLength={100}
                      placeholder="Alex Taylor"
                    />
                  </label>
                  <label>
                    Email address
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      placeholder="you@example.com"
                    />
                  </label>
                </div>
                <label>
                  Your channel or profile
                  <input
                    name="channelUrl"
                    type="url"
                    required
                    maxLength={500}
                    placeholder="https://youtube.com/@yourchannel"
                  />
                </label>
                <label>
                  What would you like to build?{" "}
                  <span className="optional">Optional</span>
                  <textarea
                    name="message"
                    maxLength={2000}
                    rows={3}
                    placeholder="Your niche, your audience, or an idea you’ve been thinking about."
                  />
                </label>
                <div className="honey" aria-hidden="true">
                  <label>
                    Website
                    <input name="website" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>
                <label className="consent">
                  <input name="consent" type="checkbox" required />
                  <span>
                    I’m happy for CreatorYield to use these details to review my
                    enquiry and contact me about it.
                  </span>
                </label>
                {status === "error" && (
                  <p className="form-error" role="alert">
                    {error}
                  </p>
                )}
                <button
                  className="action"
                  type="submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      Sending your enquiry
                      <Loader2 className="spin" size={18} />
                    </>
                  ) : (
                    <>
                      Start the conversation
                      <ArrowUpRight size={18} />
                    </>
                  )}
                </button>
                <p className="form-note">
                  No mailing list. Just a conversation about your business.
                </p>
              </form>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

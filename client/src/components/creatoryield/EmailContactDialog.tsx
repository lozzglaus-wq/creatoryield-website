import { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Check, Copy, X } from "lucide-react";

export const contactEmail = "hello@creatoryield.co.uk";
export const contactHref = `mailto:${contactEmail}`;

const emailOptions = [
  { label: "Open email app", href: contactHref },
  {
    label: "Use Gmail",
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}`,
  },
  {
    label: "Use Outlook",
    href: `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(contactEmail)}`,
  },
];

export default function EmailContactDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [copied, setCopied] = useState(false);
  const [copyHelp, setCopyHelp] = useState(false);
  const addressRef = useRef<HTMLInputElement>(null);

  function changeOpen(nextOpen: boolean) {
    setCopied(false);
    setCopyHelp(false);
    onOpenChange(nextOpen);
  }

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setCopyHelp(false);
    } catch {
      addressRef.current?.focus();
      addressRef.current?.select();
      setCopyHelp(true);
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={changeOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="contact-dialog email-contact-dialog">
          <Dialog.Close className="dialog-close" aria-label="Close contact">
            <X size={22} />
          </Dialog.Close>
          <p className="eyebrow">LET’S TALK ABOUT YOUR SHOP</p>
          <Dialog.Title>
            Contact <em>CreatorYield.</em>
          </Dialog.Title>
          <Dialog.Description>
            Tell us about your channel and what you have in mind. Email us directly.
          </Dialog.Description>
          <label className="email-address-label" htmlFor="agency-email">
            Our email address
          </label>
          <input
            id="agency-email"
            className="email-address-field"
            ref={addressRef}
            readOnly
            value={contactEmail}
            onFocus={event => event.currentTarget.select()}
          />
          <div className="email-contact-options">
            {emailOptions.map(({ label, href }) => (
              <a key={label} className="action" href={href} target="_blank" rel="noopener noreferrer">
                {label}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ))}
            <button type="button" className="action email-copy" onClick={copyAddress}>
              {copied ? "Email address copied" : "Copy email address"}
              {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
            </button>
          </div>
          <p className="email-contact-help" role="status" aria-live="polite">
            {copyHelp
              ? "The address is selected. Press and hold it, or use your browser’s copy command, to copy it."
              : copied
                ? "Copied. Paste it into a new message in your email app."
                : "If your email app doesn’t open, use Gmail or Outlook, or copy the address into a new message."}
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

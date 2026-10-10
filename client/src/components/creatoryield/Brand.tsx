import { ArrowUpRight } from "lucide-react";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`brand ${light ? "brand-light" : ""}`}
      href="/"
      aria-label="CreatorYield home"
    >
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="brand-word">
        Creator<span>Yield</span>
      </span>
    </a>
  );
}

export function Action({
  children = "Let’s talk about your shop",
  onClick,
  light = false,
  className = "",
}: {
  children?: React.ReactNode;
  onClick: () => void;
  light?: boolean;
  className?: string;
}) {
  return (
    <button
      className={`action ${light ? "action-light" : ""} ${className}`}
      onClick={onClick}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </button>
  );
}

export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="section-label">
      <span>{number}</span>
      {children}
    </p>
  );
}

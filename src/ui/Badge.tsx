import { ReactNode } from "react";

type Tone = "neutral" | "brand" | "accent" | "outline";

const tones: Record<Tone, string> = {
  neutral: "bg-surface text-body border-line",
  brand: "bg-brand-light text-brand border-brand/20",
  accent: "bg-accent/10 text-accent-dark border-accent/20",
  outline: "bg-transparent text-body border-line",
};

interface BadgeProps {
  tone?: Tone;
  children: ReactNode;
  /** Render the label in a monospace font (nice for tech-stack tags). */
  mono?: boolean;
}

export function Badge({ tone = "neutral", mono = true, children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${
        mono ? "font-mono" : ""
      } ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export default Badge;

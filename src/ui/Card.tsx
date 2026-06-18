import { HTMLAttributes, ReactNode } from "react";

// Composable card: use <Card>, <Card.Body>, <Card.Title> together rather than
// passing many props. Keeps the primitive "dumb" and flexible at call sites
// (the same pattern Radix / shadcn use).
export function Card({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`group rounded-2xl border border-line bg-white overflow-hidden transition-shadow duration-200 hover:shadow-card ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

Card.Body = ({ className = "", children }: { className?: string; children: ReactNode }) => (
  <div className={`p-5 ${className}`}>{children}</div>
);

Card.Title = ({ className = "", children }: { className?: string; children: ReactNode }) => (
  <h3 className={`text-lg font-semibold text-ink ${className}`}>{children}</h3>
);

Card.Text = ({ className = "", children }: { className?: string; children: ReactNode }) => (
  <p className={`text-sm text-body leading-relaxed ${className}`}>{children}</p>
);

export default Card;

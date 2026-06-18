import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-xl " +
  "transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-brand/50 focus-visible:ring-offset-2 disabled:opacity-50 " +
  "disabled:pointer-events-none no-underline";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  outline: "border-2 border-line text-ink hover:bg-surface",
  ghost: "text-body hover:bg-surface",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type CommonProps = { variant?: Variant; size?: Size; children: ReactNode };

// Discriminated union on `href`: render <a> when a link, otherwise <button>.
// TypeScript then enforces the correct attribute set for each element.
type ButtonProps =
  | (CommonProps & { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  | (CommonProps & { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>);

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    return (
      <a className={cls} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

export default Button;

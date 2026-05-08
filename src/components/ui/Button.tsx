import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
};

type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = AnchorProps | NativeButtonProps;

const variants = {
  primary:
    "border border-brand-strong bg-brand-strong text-white shadow-glow hover:border-ink hover:bg-ink focus-visible:ring-brand",
  secondary:
    "border border-border bg-surface text-ink hover:border-ink hover:bg-paper focus-visible:ring-ink",
  ghost: "text-ink hover:bg-ink/5 focus-visible:ring-ink",
} as const;

const sizes = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm sm:text-[0.95rem]",
  lg: "min-h-[3.35rem] px-6 text-[0.98rem]",
} as const;

const sharedClassName =
  "inline-flex items-center justify-center rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}: ButtonProps) {
  const classes = cn(sharedClassName, variants[variant], sizes[size], fullWidth && "w-full", className);

  if ("href" in props && props.href) {
    const anchorProps = props as AnchorProps;

    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as NativeButtonProps;

  return (
    <button className={classes} type={buttonProps.type ?? "button"} {...buttonProps}>
      {children}
    </button>
  );
}

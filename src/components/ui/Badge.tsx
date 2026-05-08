import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = PropsWithChildren<HTMLAttributes<HTMLSpanElement>>;

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-brand/20 bg-brand/10 px-3 py-1.5 text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-white/88 backdrop-blur sm:px-3.5 sm:tracking-[0.24em]",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

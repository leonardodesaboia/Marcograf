import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = PropsWithChildren<HTMLAttributes<HTMLSpanElement>>;

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-black/10 bg-white/92 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-graphite backdrop-blur",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

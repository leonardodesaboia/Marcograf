import type { PropsWithChildren } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  containerClassName?: string;
}>;

export function Section({ children, id, className, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-28 py-20 sm:py-24 lg:py-28", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

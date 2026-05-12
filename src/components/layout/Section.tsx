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
    <section id={id} className={cn("scroll-mt-24 py-12 sm:scroll-mt-28 sm:py-20 lg:py-28", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

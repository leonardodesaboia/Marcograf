import { Phone } from "lucide-react";
import { company } from "@/data/company";
import { sectionIds } from "@/lib/constants";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";

export function FinalCTA() {
  const scrollToSection = useScrollToSection();

  return (
    <Section className="pb-24 pt-0">
      <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-editorial-paper px-5 py-8 text-ink shadow-soft sm:rounded-[2.25rem] sm:px-10 sm:py-14">
        <div className="mb-6 h-1 rounded-full bg-[linear-gradient(90deg,rgba(111,123,73,0.92)_0_26%,rgba(138,67,81,0.92)_26%_54%,rgba(184,139,52,0.94)_54%_78%,rgba(181,91,44,0.94)_78%_100%)]" aria-hidden="true" />
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="mt-4 font-display text-balance text-[1.95rem] font-semibold leading-tight tracking-tight sm:text-4xl">{company.finalCta.title}</h2>
            <p className="mt-4 text-[1rem] leading-7 text-muted sm:text-lg sm:leading-8">{company.finalCta.description}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              fullWidth
              onClick={scrollToSection(`#${sectionIds.contact}`)}
              className="border-ink bg-ink text-paper hover:border-brand-strong hover:bg-brand-strong sm:w-auto"
            >
              Solicitar orçamento
            </Button>
            <Button size="lg" fullWidth href={company.phoneLink} variant="secondary" className="sm:w-auto">
              <Phone className="mr-2 h-4 w-4" />
              Ligar para a Marcograf
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

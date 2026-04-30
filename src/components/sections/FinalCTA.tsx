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
      <div className="cmyk-stripe overflow-hidden rounded-[2.25rem] border border-black/10 bg-ink px-6 py-10 text-white shadow-panel sm:px-10 sm:py-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="mt-4 font-display text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{company.finalCta.title}</h2>
            <p className="mt-4 text-lg leading-8 text-white/75">{company.finalCta.description}</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" onClick={scrollToSection(`#${sectionIds.contact}`)} className="border-white/20 bg-white text-ink hover:bg-paper">
              Solicitar orçamento
            </Button>
            <Button size="lg" href={company.phoneLink} variant="secondary" className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <Phone className="mr-2 h-4 w-4" />
              Ligar para a Marcograf
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

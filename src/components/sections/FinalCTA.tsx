import { Phone } from "lucide-react";
import { company } from "@/data/company";
import { landingImages } from "@/data/visuals";
import { sectionIds } from "@/lib/constants";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";

export function FinalCTA() {
  const scrollToSection = useScrollToSection();

  return (
    <Section className="pb-16 pt-0 sm:pb-24">
      <div className="overflow-hidden rounded-[1.35rem] border border-ink/10 bg-editorial-paper px-4 py-7 text-ink shadow-soft sm:rounded-[2.25rem] sm:px-10 sm:py-14">
        <div className="mb-6 h-1 rounded-full bg-[linear-gradient(90deg,rgba(111,123,73,0.92)_0_26%,rgba(138,67,81,0.92)_26%_54%,rgba(184,139,52,0.94)_54%_78%,rgba(181,91,44,0.94)_78%_100%)]" aria-hidden="true" />
        <div className="grid gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-center">
          <div className="max-w-2xl">
            <h2 className="mt-4 font-display text-balance text-[1.72rem] font-semibold leading-tight tracking-tight sm:text-4xl">{company.finalCta.title}</h2>
            <p className="mt-4 text-[1rem] leading-7 text-muted sm:text-lg sm:leading-8">{company.finalCta.description}</p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
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

          <img
            src={landingImages.finalCta}
            alt="Rotulos coloridos aplicados em embalagens"
            className="h-44 w-full rounded-[1rem] object-cover shadow-soft sm:h-64 sm:rounded-[1.6rem] lg:h-72"
            loading="lazy"
            width="900"
            height="1100"
          />
        </div>
      </div>
    </Section>
  );
}

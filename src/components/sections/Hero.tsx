import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { motion } from "framer-motion";
import { company } from "@/data/company";
import { sectionIds } from "@/lib/constants";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/layout/Section";

export function Hero() {
  const scrollToSection = useScrollToSection();
  const heroHighlights = company.hero.highlights.slice(0, 2);

  return (
    <Section
      id={sectionIds.home}
      className="section-divider flex min-h-[calc(100svh-5rem)] items-center overflow-hidden py-2 sm:min-h-[calc(100svh-6.5rem)] sm:py-4 lg:min-h-[calc(100svh-7.75rem)] lg:py-5"
      containerClassName="w-full"
    >
      <div className="hero-aura relative flex w-full items-center overflow-hidden rounded-[1.2rem] border border-white/10 px-3 py-3.5 text-white shadow-panel sm:rounded-[2.4rem] sm:px-8 sm:py-7 lg:min-h-[calc(100svh-11.25rem)] lg:px-10 lg:py-8">
        <div className="absolute inset-0 bg-mesh opacity-45" aria-hidden="true" />
        <div className="absolute -right-24 top-12 h-44 w-44 rounded-full bg-brand/18 blur-3xl sm:h-56 sm:w-56" aria-hidden="true" />
        <div className="absolute left-4 top-4 h-24 w-24 rounded-full bg-yellow/10 blur-3xl sm:left-8 sm:top-8 sm:h-36 sm:w-36" aria-hidden="true" />

        <div className="relative grid w-full items-center gap-4 sm:gap-8 lg:min-h-[29rem] lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="px-2.5 py-1 text-[0.68rem] tracking-[0.14em] sm:px-3.5 sm:py-1.5 sm:text-[0.76rem] sm:tracking-[0.24em]">
              Gráfica com parque próprio em Fortaleza/CE
            </Badge>
            <h1 className="mt-3 max-w-4xl font-display text-balance text-[1.62rem] font-semibold leading-[1] text-white sm:mt-5 sm:text-[3.4rem] sm:leading-[0.94] lg:text-[4.6rem]">
              {company.hero.title}
            </h1>
            <p className="mt-2 max-w-2xl text-[0.9rem] leading-6 text-white/84 sm:mt-5 sm:text-lg sm:leading-8">{company.hero.description}</p>

            <div className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
              {heroHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-2.5 py-1.5 text-[0.8rem] text-white/86 backdrop-blur sm:px-4 sm:py-2 sm:text-[0.95rem]"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand sm:h-4 sm:w-4" aria-hidden="true" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-2.5 min-[420px]:grid-cols-2 sm:mt-7 sm:flex sm:gap-4">
              <Button size="lg" fullWidth onClick={scrollToSection(`#${sectionIds.contact}`)} className="sm:w-auto">
                Solicitar orçamento
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                fullWidth
                variant="secondary"
                onClick={scrollToSection(`#${sectionIds.services}`)}
                className="border-white/16 bg-white/8 text-white hover:bg-white/14 hover:text-white sm:w-auto"
              >
                Conhecer serviços
              </Button>
            </div>

            <div className="mt-5 grid auto-rows-fr gap-2 sm:mt-8 sm:grid-cols-2 sm:gap-4">
              <div className="h-full rounded-[1rem] border border-white/10 bg-white/[0.08] p-3 backdrop-blur-xl sm:rounded-[1.6rem] sm:p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/78 sm:text-[0.76rem] sm:tracking-[0.26em]">Mercado</p>
                <p className="mt-2 text-[1.45rem] font-semibold text-white sm:mt-4 sm:text-3xl">{company.years} anos</p>
                <p className="mt-1 text-[0.8rem] leading-5 text-white/82 sm:mt-2 sm:text-[0.98rem] sm:leading-7">
                  <span className="sm:hidden">Editorial, corporativo e promocional.</span>
                  <span className="hidden sm:inline">Experiência em projetos editoriais, institucionais e promocionais.</span>
                </p>
              </div>
              <div className="h-full rounded-[1rem] border border-white/10 bg-white/[0.08] p-3 backdrop-blur-xl sm:rounded-[1.6rem] sm:p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/78 sm:text-[0.76rem] sm:tracking-[0.26em]">Avaliação</p>
                <div className="mt-2 flex items-center gap-2 sm:mt-4">
                  <p className="text-[1.45rem] font-semibold text-white sm:text-3xl">{String(company.rating).replace(".", ",")}</p>
                  <Star className="h-3.5 w-3.5 fill-yellow text-yellow sm:h-4 sm:w-4" aria-hidden="true" />
                </div>
                <p className="mt-1 text-[0.8rem] leading-5 text-white/82 sm:mt-2 sm:text-[0.98rem] sm:leading-7">{company.reviews} avaliações públicas no Google.</p>
              </div>
            </div>

            <div className="mt-4 rounded-[0.95rem] border border-white/10 bg-white/[0.06] px-3 py-2 text-[0.78rem] text-white/78 backdrop-blur lg:hidden">
              Pré-impressão • Impressão • Acabamento
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="relative hidden lg:block lg:h-full lg:pl-6"
          >
            <div className="soft-panel overflow-hidden rounded-[1.35rem] border border-white/10 p-2 shadow-panel sm:rounded-[2.2rem] sm:p-3 lg:flex lg:h-full">
              <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[1.7rem] lg:h-full lg:w-full">
                <img src="structure.png" alt="Imagem do maquinário" className="h-[15rem] w-full object-cover sm:h-[20rem] lg:h-full lg:min-h-[29rem]" width="800" height="400" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/68 via-ink/10 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 rounded-[1rem] border border-white/10 bg-ink/84 p-3 text-white backdrop-blur-xl sm:bottom-4 sm:left-4 sm:right-4 sm:rounded-[1.4rem] sm:p-4">
                  <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-white/78 sm:tracking-[0.26em]">Fluxo interno</p>
                  <p className="mt-2 text-base font-semibold leading-snug sm:text-xl">Do arquivo ao acabamento.</p>
                  <p className="mt-3 text-[0.9rem] text-white/84 sm:mt-4 sm:text-[0.95rem]">Pré-impressão • Impressão • Acabamento</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

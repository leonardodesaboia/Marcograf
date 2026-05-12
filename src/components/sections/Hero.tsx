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

  return (
    <Section id={sectionIds.home} className="section-divider overflow-hidden pt-4 sm:pt-10 lg:pt-12">
      <div className="hero-aura relative overflow-hidden rounded-[1.35rem] border border-white/10 px-3.5 py-5 text-white shadow-panel sm:rounded-[2.4rem] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="absolute inset-0 bg-mesh opacity-45" aria-hidden="true" />
        <div className="absolute -right-24 top-12 h-56 w-56 rounded-full bg-brand/18 blur-3xl" aria-hidden="true" />
        <div className="absolute left-8 top-8 h-36 w-36 rounded-full bg-yellow/10 blur-3xl" aria-hidden="true" />

        <div className="relative grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <Badge>Gráfica com parque próprio em Fortaleza/CE</Badge>
            <h1 className="mt-4 max-w-4xl font-display text-balance text-[2rem] font-semibold leading-[1.05] text-white sm:mt-6 sm:text-[3.7rem] sm:leading-[0.92] lg:text-[5rem]">
              {company.hero.title}
            </h1>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-white/84 sm:mt-6 sm:text-lg sm:leading-8">{company.hero.description}</p>

            <div className="mt-6 grid gap-2 sm:mt-7 sm:flex sm:flex-wrap sm:gap-3">
              {company.hero.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3.5 py-2 text-[0.92rem] text-white/86 backdrop-blur sm:px-4 sm:text-[0.95rem]"
                >
                  <CheckCircle2 className="h-4 w-4 text-brand" aria-hidden="true" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
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

            <div className="mt-7 grid auto-rows-fr gap-2.5 min-[520px]:grid-cols-2 md:mt-10 md:grid-cols-3 md:gap-4">
              <div className="h-full rounded-[1.1rem] border border-white/10 bg-white/[0.08] p-3.5 backdrop-blur-xl sm:rounded-[1.6rem] sm:p-5">
                <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-white/78 sm:tracking-[0.26em]">Mercado</p>
                <p className="mt-3 text-[1.8rem] font-semibold text-white sm:mt-4 sm:text-3xl">{company.years} anos</p>
                <p className="mt-2 text-[0.98rem] leading-7 text-white/82">Experiência em projetos editoriais, institucionais e promocionais.</p>
              </div>
              <div className="h-full rounded-[1.1rem] border border-white/10 bg-white/[0.08] p-3.5 backdrop-blur-xl sm:rounded-[1.6rem] sm:p-5">
                <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-white/78 sm:tracking-[0.26em]">Avaliação</p>
                <div className="mt-3 flex items-center gap-2 sm:mt-4">
                  <p className="text-[1.8rem] font-semibold text-white sm:text-3xl">{String(company.rating).replace(".", ",")}</p>
                  <Star className="h-4 w-4 fill-yellow text-yellow" aria-hidden="true" />
                </div>
                <p className="mt-2 text-[0.98rem] leading-7 text-white/82">{company.reviews} avaliações públicas no Google.</p>
              </div>
              <div className="h-full rounded-[1.1rem] border border-white/10 bg-white/[0.08] p-3.5 backdrop-blur-xl min-[520px]:col-span-2 md:col-span-1 sm:rounded-[1.6rem] sm:p-5">
                <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-white/78 sm:tracking-[0.26em]">Parque gráfico</p>
                <p className="mt-3 text-[1.8rem] font-semibold text-white sm:mt-4 sm:text-3xl">{company.area}</p>
                <p className="mt-2 text-[0.98rem] leading-7 text-white/82">Pré-impressão, produção e acabamento no mesmo fluxo.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="relative lg:pl-6"
          >
            <div className="soft-panel overflow-hidden rounded-[1.35rem] border border-white/10 p-2 shadow-panel sm:rounded-[2.2rem] sm:p-3">
              <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[1.7rem]">
                <img src="structure.png" alt="Imagem do maquinário" className="h-[19rem] w-full object-cover sm:h-[25rem]" width="800" height="400" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/68 via-ink/10 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 rounded-[1rem] border border-white/10 bg-ink/84 p-3 text-white backdrop-blur-xl sm:bottom-4 sm:left-4 sm:right-4 sm:rounded-[1.4rem] sm:p-4">
                  <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-white/78 sm:tracking-[0.26em]">Fluxo interno</p>
                  <p className="mt-2 text-base font-semibold leading-snug sm:text-xl">Do arquivo ao acabamento.</p>
                  <div className="mt-3 grid gap-1.5 sm:mt-4 sm:grid-cols-3 sm:gap-2">
                    <div className="rounded-[0.9rem] border border-white/10 bg-white/[0.08] px-3 py-2.5 text-[0.9rem] text-white/88 sm:rounded-[1rem] sm:py-3 sm:text-[0.95rem]">
                      Pré-impressão
                    </div>
                    <div className="rounded-[0.9rem] border border-white/10 bg-white/[0.08] px-3 py-2.5 text-[0.9rem] text-white/88 sm:rounded-[1rem] sm:py-3 sm:text-[0.95rem]">
                      Impressão
                    </div>
                    <div className="rounded-[0.9rem] border border-white/10 bg-white/[0.08] px-3 py-2.5 text-[0.9rem] text-white/88 sm:rounded-[1rem] sm:py-3 sm:text-[0.95rem]">
                      Acabamento
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

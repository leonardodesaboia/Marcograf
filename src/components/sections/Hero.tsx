import { ArrowRight, Building2, CheckCircle2, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";
import { company } from "@/data/company";
import { landingImages } from "@/data/visuals";
import { sectionIds } from "@/lib/constants";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";

export function Hero() {
  const scrollToSection = useScrollToSection();
  const heroMeta = [
    `${company.years} anos de mercado`,
    `${String(company.rating).replace(".", ",")} no Google`,
    "Produção própria",
  ];

  return (
    <Section
      id={sectionIds.home}
      className="section-divider flex min-h-[calc(100svh-5rem)] items-center overflow-hidden py-4 sm:min-h-[calc(100svh-6.5rem)] sm:py-4 lg:min-h-[calc(100svh-7.75rem)] lg:py-5"
      containerClassName="w-full"
    >
      <div className="hero-aura relative flex w-full items-center overflow-hidden rounded-[1.5rem] border border-white/10 px-4 py-5 text-white shadow-panel sm:rounded-[2.4rem] sm:px-8 sm:py-7 lg:min-h-[calc(100svh-11.25rem)] lg:px-10 lg:py-8">
        <div className="absolute inset-0 bg-mesh opacity-45" aria-hidden="true" />
        <div className="absolute -right-24 top-12 h-44 w-44 rounded-full bg-brand/18 blur-3xl sm:h-56 sm:w-56" aria-hidden="true" />
        <div className="absolute left-4 top-4 h-24 w-24 rounded-full bg-yellow/10 blur-3xl sm:left-8 sm:top-8 sm:h-36 sm:w-36" aria-hidden="true" />

        <div className="relative grid w-full items-center gap-6 sm:gap-8 lg:min-h-[29rem] lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3.5 py-2 text-[0.76rem] font-medium uppercase tracking-[0.12em] text-white/82 backdrop-blur sm:px-4 sm:text-[0.78rem]">
                <Building2 className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                <span>Marcograf • Fortaleza/CE</span>
              </div>
            </div>

            <h1 className="mt-4 max-w-4xl font-display text-balance text-[2.3rem] font-semibold leading-[0.94] text-white sm:mt-5 sm:text-[3.5rem] sm:leading-[0.93] lg:text-[4.5rem]">
              <span className="text-brand">Marcograf.</span> Impressão com mais controle do arquivo à entrega.
            </h1>
            <p className="mt-4 max-w-2xl text-[1rem] leading-7 text-white/82 sm:mt-5 sm:text-lg sm:leading-8">
              Gráfica em Fortaleza com produção própria para materiais editoriais, corporativos e promocionais.
            </p>

            <div className="mt-5 grid gap-2.5 min-[420px]:grid-cols-2 sm:mt-7 sm:flex sm:gap-4">
              <Button size="lg" fullWidth onClick={scrollToSection(`#${sectionIds.contact}`)} className="min-h-[48px] sm:w-auto">
                Solicitar orçamento
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                fullWidth
                variant="secondary"
                onClick={scrollToSection(`#${sectionIds.services}`)}
                className="min-h-[48px] border-white/16 bg-white/8 text-white hover:bg-white/14 hover:text-white sm:w-auto"
              >
                Conhecer serviços
              </Button>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5 text-[0.86rem] text-white/72 sm:mt-7 sm:gap-4 sm:text-[0.94rem]">
              {heroMeta.map((stat) => (
                <div key={stat} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2.5 backdrop-blur">
                  {stat.includes("Google") ? (
                    <Star className="h-3.5 w-3.5 fill-yellow text-yellow" aria-hidden="true" />
                  ) : (
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                  )}
                  <span>{stat}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="relative lg:h-full lg:pl-6"
          >
            <div className="soft-panel overflow-hidden rounded-[1.2rem] border border-white/10 p-2 shadow-panel sm:rounded-[2.2rem] sm:p-3 lg:flex lg:h-full">
              <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[1.7rem] lg:h-full lg:w-full">
                <img
                  src={landingImages.hero}
                  alt="Imagem de prensa industrial em operação"
                  className="h-[17rem] w-full object-cover sm:h-[20rem] lg:h-full lg:min-h-[29rem]"
                  width="800"
                  height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/68 via-ink/10 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-3 left-3 right-3 rounded-[1rem] border border-white/10 bg-ink/84 p-3.5 text-white backdrop-blur-xl sm:bottom-4 sm:left-4 sm:right-4 sm:rounded-[1.4rem] sm:p-4">
                  <div className="flex items-center gap-2 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-white/70">
                    <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    <span>Marcograf • Fortaleza</span>
                  </div>
                  <p className="mt-2 text-base font-semibold leading-snug sm:text-xl">Do arquivo ao acabamento.</p>
                  <p className="mt-2 text-[0.88rem] text-white/82 sm:text-[0.95rem]">Estrutura própria para produzir com mais consistência.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

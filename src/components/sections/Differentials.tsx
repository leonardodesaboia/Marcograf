import { motion } from "framer-motion";
import { differentials } from "@/data/differentials";
import { landingImages } from "@/data/visuals";
import { sectionIds } from "@/lib/constants";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";

export function Differentials() {
  const scrollToSection = useScrollToSection();

  return (
    <Section id={sectionIds.differentials} className="section-divider bg-paper">
      <div className="grid items-stretch gap-8 sm:gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="cmyk-stripe hero-aura relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-white/12 px-4 py-6 text-white shadow-panel sm:rounded-[2rem] sm:px-8 sm:py-8">
          <div className="bg-technical-grid absolute inset-0 opacity-[0.08]" aria-hidden="true" />
          <div className="relative flex h-full flex-col">
            <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-white/78 sm:tracking-[0.28em]">Diferenciais</p>
            <h2 className="mt-4 max-w-md font-display text-[2rem] font-semibold leading-tight text-white sm:mt-5 sm:text-[2.4rem]">
              Por que escolher a Marcograf?
            </h2>
            <p className="mt-4 max-w-md text-[1rem] leading-7 text-white/84 sm:leading-8">
              Experiência, estrutura própria e compromisso com qualidade fazem da Marcograf uma parceira para projetos gráficos de diferentes portes.
            </p>

            <img
              src={landingImages.differentials}
              alt="Maquina de impressao em ambiente de producao"
              className="mt-6 h-44 w-full rounded-[1rem] object-cover sm:mt-8 sm:h-56 sm:rounded-[1.45rem]"
              loading="lazy"
              width="1000"
              height="700"
            />

            <div className="mt-8 lg:mt-auto lg:pt-8">
              <Button
                variant="secondary"
                onClick={scrollToSection(`#${sectionIds.contact}`)}
                className="border-white/14 bg-paper text-ink hover:border-white/30 hover:bg-white"
              >
                Solicitar orçamento
              </Button>
            </div>
          </div>
        </div>

        <div className="grid auto-rows-fr gap-3 sm:grid-cols-2">
          {differentials.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="h-full rounded-[1.15rem] border border-ink/10 bg-surface px-4 py-4 shadow-soft sm:rounded-[1.6rem] sm:px-5 sm:py-5"
            >
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-brand sm:tracking-[0.24em]">0{index + 1}</p>
              <h3 className="mt-3 text-[1.08rem] font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-[0.98rem] leading-7 text-muted">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}

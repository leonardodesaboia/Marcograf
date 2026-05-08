import { motion } from "framer-motion";
import { differentials } from "@/data/differentials";
import { sectionIds } from "@/lib/constants";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";

export function Differentials() {
  const scrollToSection = useScrollToSection();

  return (
    <Section id={sectionIds.differentials} className="section-divider bg-paper">
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="cmyk-stripe hero-aura relative overflow-hidden rounded-[2rem] border border-white/12 px-5 py-7 text-white shadow-panel sm:px-8 sm:py-8">
          <div className="bg-technical-grid absolute inset-0 opacity-[0.08]" aria-hidden="true" />
          <div className="relative">
            <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-white/78 sm:tracking-[0.28em]">Diferenciais</p>
            <h2 className="mt-4 max-w-md font-display text-[2rem] font-semibold leading-tight text-white sm:mt-5 sm:text-[2.4rem]">
              Por que escolher a Marcograf?
            </h2>
            <p className="mt-4 max-w-md text-[1rem] leading-7 text-white/84 sm:leading-8">
              Experiência, estrutura própria e compromisso com qualidade fazem da Marcograf uma parceira para projetos gráficos de diferentes portes.
            </p>

            <p className="mt-6 max-w-md text-[0.98rem] leading-7 text-white/86 sm:mt-8">
              A proposta comercial e técnica é construída com base em processo, acabamento e adequação ao material. Isso reduz improviso e aumenta previsibilidade na produção.
            </p>

            <div className="mt-8">
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

        <div className="grid gap-3 sm:grid-cols-2">
          {differentials.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-[1.6rem] border border-ink/10 bg-surface px-5 py-5 shadow-soft"
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

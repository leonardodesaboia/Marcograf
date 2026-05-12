import { motion } from "framer-motion";
import { structure } from "@/data/structure";
import { landingImages } from "@/data/visuals";
import { sectionIds } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Section } from "@/components/layout/Section";

export function Structure() {
  const finishingCategory = structure.find((item) => item.category === "Acabamentos");
  const technicalCategories = structure.filter((item) => item.category !== "Acabamentos");
  const highlightedFinishes = finishingCategory?.items.slice(0, 8) ?? [];
  const remainingFinishes = finishingCategory ? finishingCategory.items.length - highlightedFinishes.length : 0;

  return (
    <Section id={sectionIds.structure} className="section-divider">
      <div className="grid items-start gap-8 sm:gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionTitle
            eyebrow="Estrutura"
            title="Parque gráfico completo para projetos de alto padrão"
            description="Estrutura para acompanhar o processo do arquivo ao acabamento."
          />

          <div className="cmyk-stripe hero-aura mt-6 overflow-hidden rounded-[1.35rem] border border-white/12 text-white shadow-panel sm:mt-8 sm:rounded-[2rem]">
            <div className="bg-technical-grid absolute inset-0 opacity-[0.08]" aria-hidden="true" />
            <img
              src={landingImages.structure}
              alt="Impressora de grande formato em producao"
              className="h-40 w-full object-cover opacity-90 sm:h-52"
              loading="lazy"
              width="1200"
              height="760"
            />
            <div className="relative p-4 sm:p-7">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-white/78 sm:tracking-[0.26em]">Visão geral</p>
              <p className="mt-4 text-[1.9rem] font-semibold leading-tight sm:mt-5 sm:text-[2.3rem]">
                Estrutura própria para imprimir e finalizar com mais controle.
              </p>

              <div className="mt-6 grid gap-2.5 sm:mt-7">
                {technicalCategories.slice(0, 3).map((item) => (
                  <div key={item.category} className="rounded-[1rem] border border-white/10 bg-white/[0.08] px-4 py-3 text-[0.95rem] text-white/86 backdrop-blur">
                    <span className="font-semibold text-white">{item.category}</span>
                    <span className="text-white/70"> · {item.items.join(", ")}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-5">
          <div className="grid auto-rows-fr gap-3 sm:gap-4 md:grid-cols-2">
            {technicalCategories.map((category, index) => (
              <motion.article
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="flex h-full flex-col rounded-[1.15rem] border border-ink/10 bg-surface p-4 shadow-soft sm:rounded-[1.6rem] sm:p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-ink">{category.category}</h3>
                </div>
                <ul className="mt-4 flex flex-1 flex-col gap-1.5">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.94rem] leading-6 text-graphite">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          {finishingCategory ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: 0.12 }}
            >
              <div className="rounded-[1.35rem] border border-ink/10 bg-editorial-paper p-4 shadow-soft sm:rounded-[1.9rem] sm:p-7">
                <div className="grid items-stretch gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:gap-8">
                  <div className="flex h-full flex-col">
                    <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-muted sm:tracking-[0.24em]">
                      Acabamentos
                    </p>
                    <h3 className="mt-4 text-[1.65rem] font-semibold leading-tight text-ink sm:text-[1.95rem]">
                      Acabamentos que valorizam apresentação e resistência.
                    </h3>
                    <div className="mt-6 rounded-[1.4rem] border border-ink/10 bg-white p-4 lg:mt-auto">
                      <p className="text-[0.98rem] text-muted">Opções principais mapeadas</p>
                      <p className="mt-2 text-4xl font-semibold text-ink">
                        {finishingCategory.items.length}
                      </p>
                    </div>
                  </div>

                  <div className="grid auto-rows-fr gap-2 sm:grid-cols-2">
                    {highlightedFinishes.map((item) => (
                      <div
                        key={item}
                        className="flex h-full items-center rounded-[1.2rem] border border-ink/10 bg-white px-4 py-3 text-[0.94rem] leading-6 text-graphite"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                {remainingFinishes > 0 ? (
                  <p className="mt-4 text-[0.9rem] text-muted">
                    + {remainingFinishes} opções adicionais de acabamento disponíveis sob consulta.
                  </p>
                ) : null}
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}

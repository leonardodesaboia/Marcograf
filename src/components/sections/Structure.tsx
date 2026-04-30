import { motion } from "framer-motion";
import { company } from "@/data/company";
import { structure } from "@/data/structure";
import { sectionIds } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Section } from "@/components/layout/Section";

export function Structure() {
  const finishingCategory = structure.find((item) => item.category === "Acabamentos");
  const technicalCategories = structure.filter((item) => item.category !== "Acabamentos");

  return (
    <Section id={sectionIds.structure} className="section-divider">
      <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionTitle
            eyebrow="Estrutura"
            title="Parque gráfico completo para projetos de alto padrão"
            description="A Marcograf possui estrutura para acompanhar diferentes etapas do processo gráfico, desde a pré-impressão até o acabamento final, oferecendo mais controle, qualidade e segurança na entrega."
          />

          <div className="cmyk-stripe mt-8 overflow-hidden rounded-[2rem] border border-black/10 bg-ink text-white shadow-panel">
            <div className="bg-technical-grid absolute inset-0 opacity-[0.08]" aria-hidden="true" />
            <div className="relative p-6 sm:p-7">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-white/55">Visão geral</p>
              <p className="mt-5 font-display text-[2.4rem] font-semibold leading-tight">
                Estrutura própria para imprimir, provar e finalizar com mais controle de processo.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-sm text-white/62">Área operacional</p>
                  <p className="mt-2 font-display text-3xl font-semibold">{company.area}</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-sm text-white/62">Cobertura técnica</p>
                  <p className="mt-2 font-display text-3xl font-semibold">Pré a acabamento</p>
                </div>
              </div>

              <div className="mt-7 rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-5">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/50">
                  Estrutura mapeada
                </p>
                <div className="mt-4 space-y-3">
                  {technicalCategories.map((item, index) => (
                    <div key={item.category} className="flex items-center justify-between gap-4 border-b border-white/8 pb-3 last:border-b-0 last:pb-0">
                      <span className="text-sm text-white/72">
                        {String(index + 1).padStart(2, "0")} · {item.category}
                      </span>
                      <span className="text-sm font-medium text-white">{item.items.length} itens</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {technicalCategories.map((category, index) => (
              <motion.article
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="h-full rounded-[1.6rem] border border-black/10 bg-white p-5 shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-ink">{category.category}</h3>
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted">
                    {String(category.items.length).padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-5 space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-graphite">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/30" />
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
              <div className="rounded-[1.9rem] border border-black/10 bg-editorial-paper p-6 shadow-soft sm:p-7">
                <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:gap-10">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-muted">
                      Acabamentos
                    </p>
                    <h3 className="mt-4 font-display text-[2rem] font-semibold leading-tight text-ink">
                      Recursos para valorizar apresentação, resistência e percepção do material.
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-muted">
                      A etapa final influencia leitura, manuseio, proteção e presença visual do impresso. Por isso, os acabamentos ficam destacados em uma matriz própria.
                    </p>
                    <div className="mt-6 rounded-[1.4rem] border border-black/10 bg-white p-4">
                      <p className="text-sm text-muted">Quantidade de opções listadas</p>
                      <p className="mt-2 font-display text-4xl font-semibold text-ink">
                        {finishingCategory.items.length}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    {finishingCategory.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.2rem] border border-black/10 bg-white px-4 py-3 text-sm leading-6 text-graphite transition hover:border-black/20 hover:bg-white/85"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}

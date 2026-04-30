import { motion } from "framer-motion";
import { company } from "@/data/company";
import { differentials } from "@/data/differentials";
import { sectionIds } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Section } from "@/components/layout/Section";

export function About() {
  return (
    <Section id={sectionIds.about} className="section-divider">
      <SectionTitle eyebrow="Sobre" title={company.about.title} description={company.tagline} />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <div>
          <div className="space-y-6 text-base leading-8 text-muted sm:text-lg">
            {company.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 rounded-[1.9rem] border border-black/10 bg-editorial-paper p-6 shadow-soft sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.35rem] border border-black/10 bg-white px-5 py-5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted">Tempo de mercado</p>
                <p className="mt-4 font-display text-4xl font-semibold text-ink">{company.years} anos</p>
                <p className="mt-2 text-sm leading-6 text-muted">Histórico técnico e comercial construído com consistência.</p>
              </div>
              <div className="rounded-[1.35rem] border border-black/10 bg-white px-5 py-5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted">Estrutura própria</p>
                <p className="mt-4 font-display text-4xl font-semibold text-ink">{company.area}</p>
                <p className="mt-2 text-sm leading-6 text-muted">Operação dedicada às etapas de pré-impressão, impressão e acabamento.</p>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {differentials.slice(0, 4).map((item, index) => (
                <div key={item.title} className="rounded-[1.2rem] border border-black/10 bg-white px-4 py-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted">0{index + 1}</p>
                  <h3 className="mt-2 text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {company.about.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className={`rounded-[1.6rem] border border-black/10 px-5 py-5 shadow-soft ${
                index === 1 ? "bg-paper" : "bg-white"
              }`}
            >
              <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:gap-6">
                <p className="font-display text-[2rem] leading-none text-black/24">0{index + 1}</p>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{pillar.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

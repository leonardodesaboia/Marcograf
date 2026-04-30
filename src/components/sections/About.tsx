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

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12">
        <div>
          <p className="text-base leading-8 text-muted sm:text-lg">{company.about.paragraphs[0]}</p>

          <div className="mt-8 rounded-[1.8rem] border border-black/10 bg-editorial-paper p-5 shadow-soft sm:p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {differentials.slice(2, 6).map((item, index) => (
                <div key={item.title} className="rounded-[1.1rem] border border-black/10 bg-white px-4 py-3.5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted">0{index + 1}</p>
                  <h3 className="mt-1.5 text-sm font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-black/10 bg-white p-5 shadow-soft sm:p-6">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-muted">Direção institucional</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {company.about.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className={`rounded-[1.1rem] border border-black/10 px-4 py-3 ${index === 1 ? "bg-paper" : "bg-white"}`}
            >
              <div className="grid items-start gap-2 sm:grid-cols-[auto_1fr] sm:gap-3">
                <p className="text-[0.95rem] font-semibold leading-none text-black/24">0{index + 1}</p>
                <div>
                  <h3 className="text-sm font-semibold text-ink">{pillar.title}</h3>
                  <p className="mt-1 text-sm leading-5.5 text-muted">{pillar.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

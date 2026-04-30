import { motion } from "framer-motion";
import { company } from "@/data/company";
import { sectionIds } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Section } from "@/components/layout/Section";

export function Process() {
  return (
    <Section id={sectionIds.process} className="section-divider bg-paper">
      <SectionTitle eyebrow="Processo" title={company.process.title} description={company.process.subtitle} align="center" />

      <div className="mt-12 grid gap-5 lg:grid-cols-4 lg:gap-4">
        {company.process.steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="relative"
          >
            {index < company.process.steps.length - 1 ? (
              <span className="absolute left-6 top-14 h-[calc(100%-3.5rem)] w-px bg-black/10 lg:left-[calc(100%-1rem)] lg:top-6 lg:h-px lg:w-8" aria-hidden="true" />
            ) : null}

            <div className="relative h-full rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-editorial-paper text-lg font-semibold text-ink">
                0{index + 1}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

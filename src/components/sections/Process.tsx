import { motion } from "framer-motion";
import { company } from "@/data/company";
import { sectionIds } from "@/lib/constants";
import { Section } from "@/components/layout/Section";

export function Process() {
  return (
    <Section id={sectionIds.process} className="section-divider">
      <div className="overflow-hidden rounded-[1.35rem] border border-ink/10 bg-surface px-4 py-7 text-ink shadow-soft sm:rounded-[2.3rem] sm:px-8 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2.5 text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-muted sm:gap-3 sm:tracking-[0.28em]">
            <span className="h-px w-10 bg-brand" />
            Processo
            <span className="h-px w-10 bg-ink/12" />
          </span>
          <h2 className="mt-4 font-display text-balance text-[1.72rem] font-semibold leading-tight tracking-tight text-ink sm:mt-5 sm:text-[2.85rem]">
            {company.process.title}
          </h2>
          <p className="mt-4 text-[1rem] leading-7 text-muted sm:text-[1.05rem] sm:leading-8">{company.process.subtitle}</p>
        </div>

        <div className="mt-8 grid auto-rows-fr gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-4 lg:gap-4">
          {company.process.steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="relative h-full"
            >
              {index < company.process.steps.length - 1 ? (
                <span className="absolute left-6 top-14 h-[calc(100%-3.5rem)] w-px bg-ink/10 lg:left-[calc(100%-1rem)] lg:top-6 lg:h-px lg:w-8" aria-hidden="true" />
              ) : null}

              <div className="relative h-full rounded-[1.15rem] border border-ink/10 bg-editorial-paper p-4 shadow-soft sm:rounded-[1.75rem] sm:p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand/20 bg-brand/10 text-lg font-semibold text-brand">
                  0{index + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-[0.98rem] leading-7 text-muted">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

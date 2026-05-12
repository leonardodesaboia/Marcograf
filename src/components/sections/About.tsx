import { motion } from "framer-motion";
import { company } from "@/data/company";
import { differentials } from "@/data/differentials";
import { landingImages } from "@/data/visuals";
import { sectionIds } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Section } from "@/components/layout/Section";

export function About() {
  return (
    <Section id={sectionIds.about} className="section-divider">
      <div className="grid gap-8 sm:gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionTitle eyebrow="Sobre" title={company.about.title} description={company.tagline} />
          <p className="mt-5 text-[0.98rem] leading-7 text-muted sm:mt-8 sm:text-lg sm:leading-8">{company.about.paragraphs[0]}</p>

          <div className="hero-aura mt-6 overflow-hidden rounded-[1.35rem] border border-white/12 text-white shadow-panel sm:mt-8 sm:rounded-[1.8rem]">
            <img
              src={landingImages.about}
              alt="Profissional carregando pilhas de papel em uma grafica"
              className="h-48 w-full object-cover opacity-90 sm:h-64"
              loading="lazy"
              width="1200"
              height="800"
            />
            <div className="p-5 sm:p-6">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-white/78 sm:tracking-[0.24em]">Posicionamento</p>
              <p className="mt-3 text-[1.65rem] font-semibold leading-tight sm:text-2xl">
                Produção gráfica com mais critério técnico e menos improviso.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="rounded-[1.35rem] border border-ink/10 bg-editorial-paper p-4 shadow-soft sm:rounded-[1.9rem] sm:p-6">
            <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-muted sm:tracking-[0.24em]">Pontos de força</p>
            <div className="mt-4 grid auto-rows-fr gap-3 sm:grid-cols-2">
              {differentials.slice(2, 6).map((item, index) => (
                <div key={item.title} className="h-full rounded-[1rem] border border-ink/10 bg-surface px-4 py-4 sm:rounded-[1.2rem]">
                  <p className="text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-brand sm:tracking-[0.24em]">0{index + 1}</p>
                  <h3 className="mt-2 text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-[0.98rem] leading-7 text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.35rem] border border-ink/10 bg-surface p-4 shadow-soft sm:rounded-[2rem] sm:p-6">
            <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-muted sm:tracking-[0.24em]">Base da operação</p>
            <div className="mt-4 grid auto-rows-fr gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {company.about.pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className={`h-full rounded-[1.3rem] border px-4 py-4 ${index === 1 ? "border-brand/20 bg-brand/5" : "border-ink/10 bg-white"}`}
                >
                  <div className="grid items-start gap-2 sm:grid-cols-[auto_1fr] sm:gap-3">
                    <p className="text-[0.95rem] font-semibold leading-none text-brand">0{index + 1}</p>
                    <div>
                      <h3 className="text-base font-semibold text-ink">{pillar.title}</h3>
                      <p className="mt-1 text-[0.98rem] leading-6 text-muted">{pillar.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

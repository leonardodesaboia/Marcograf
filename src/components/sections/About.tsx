import { motion } from "framer-motion";
import { company } from "@/data/company";
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
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-muted sm:tracking-[0.24em]">Pontos de força</p>
                <p className="mt-2 max-w-xl text-[0.98rem] leading-7 text-muted">
                  Capacidades que ampliam o escopo da Marcograf sem diluir critério técnico.
                </p>
              </div>
              <span className="hidden rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand sm:inline-flex">
                Escala + controle
              </span>
            </div>

            <div className="mt-5 grid auto-rows-fr gap-3 sm:grid-cols-2">
              {company.about.strengths.map((item, index) => (
                <div
                  key={item.title}
                  className={`h-full rounded-[1.1rem] border px-4 py-4 sm:rounded-[1.3rem] ${
                    index === 0 ? "border-brand/20 bg-white shadow-soft" : "border-ink/10 bg-surface"
                  }`}
                >
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand sm:tracking-[0.24em]">{item.label}</p>
                  <h3 className="mt-3 text-[1.08rem] font-semibold leading-snug text-ink">{item.title}</h3>
                  <p className="mt-2 text-[0.98rem] leading-7 text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.35rem] border border-ink/10 bg-ink px-4 py-5 text-white shadow-panel sm:rounded-[2rem] sm:px-6 sm:py-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-white/82 sm:tracking-[0.24em]">Base da operação</p>
                <p className="mt-2 max-w-xl text-[0.98rem] leading-7 text-white/88">
                  O que sustenta a execução de ponta a ponta dentro da estrutura da gráfica.
                </p>
              </div>
              <div className="h-1.5 w-28 rounded-full bg-cmyk-band" aria-hidden="true" />
            </div>

            <div className="mt-5 grid auto-rows-fr gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {company.about.operationBase.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="h-full rounded-[1.3rem] border border-white/12 bg-[#1b1b1b] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  <div className="grid items-start gap-3 sm:grid-cols-[auto_1fr] sm:gap-4">
                    <p className="font-display text-[1.8rem] leading-none text-white/52">0{index + 1}</p>
                    <div>
                      <div className="inline-flex rounded-full border border-white/14 bg-white/6 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/82">
                        Etapa estrutural
                      </div>
                      <h3 className="mt-3 text-base font-semibold text-white">{pillar.title}</h3>
                      <p className="mt-2 text-[0.98rem] leading-7 text-white/90">{pillar.description}</p>
                      <p className="mt-3 text-[0.9rem] font-semibold text-yellow">{pillar.highlight}</p>
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

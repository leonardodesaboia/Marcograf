import { ArrowRight, Phone, Star } from "lucide-react";
import { motion } from "framer-motion";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { sectionIds } from "@/lib/constants";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/layout/Section";

export function Hero() {
  const scrollToSection = useScrollToSection();

  return (
    <Section id={sectionIds.home} className="section-divider overflow-hidden bg-paper pt-10 sm:pt-12 lg:pt-14">
      <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="border-black/10 bg-white text-ink">Indústria gráfica em Fortaleza/CE</Badge>
          <h1 className="mt-6 max-w-4xl font-display text-balance text-[2.9rem] font-semibold leading-none text-ink sm:text-[4rem] lg:text-[4.8rem]">
            {company.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">{company.hero.description}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" onClick={scrollToSection(`#${sectionIds.contact}`)}>
              Solicitar orçamento
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="secondary" onClick={scrollToSection(`#${sectionIds.services}`)}>
              Conhecer serviços
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-black/10 bg-white p-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-muted">Mercado</p>
              <p className="mt-4 font-display text-3xl font-semibold text-ink">{company.years} anos</p>
              <p className="mt-2 text-sm leading-6 text-muted">Atuação consolidada em editorial, embalagens, papelaria e comunicação visual.</p>
            </div>
            <div className="rounded-[1.5rem] border border-black/10 bg-white p-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-muted">Avaliação</p>
              <div className="mt-4 flex items-center gap-2">
                <p className="font-display text-3xl font-semibold text-ink">{String(company.rating).replace(".", ",")}</p>
                <Star className="h-4 w-4 fill-yellow text-yellow" />
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">{company.reviews} avaliações públicas no Google.</p>
            </div>
            <div className="rounded-[1.5rem] border border-black/10 bg-white p-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-muted">Estrutura</p>
              <p className="mt-4 font-display text-3xl font-semibold text-ink">{company.area}</p>
              <p className="mt-2 text-sm leading-6 text-muted">Parque gráfico próprio com etapas de pré-impressão, impressão e acabamento.</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-graphite">
            {company.hero.badges.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-black/30" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="relative lg:pl-6"
        >
          <div className="absolute -left-2 top-10 hidden h-[78%] w-[88%] rounded-[2rem] border border-black/8 bg-white sm:block" />
          <div className="absolute right-0 top-0 hidden h-[88%] w-[72%] rounded-[2rem] border border-cyan/25 bg-white/70 sm:block" />

          <div className="cmyk-stripe relative overflow-hidden rounded-[2rem] border border-black/10 bg-ink text-white shadow-panel">
            <div className="bg-technical-grid absolute inset-0 opacity-[0.08]" aria-hidden="true" />

            <div className="relative p-7 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/55">Marcograf</p>
                  <p className="mt-4 max-w-sm font-display text-[2rem] font-semibold leading-tight">
                    Produção gráfica com base técnica, escala e acabamento.
                  </p>
                </div>
                <a
                  href={company.phoneLink}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/78 transition hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {company.phone}
                </a>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/45">Experiência</p>
                  <p className="mt-3 font-display text-2xl font-semibold">{company.years} anos</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/45">Avaliação</p>
                  <p className="mt-3 font-display text-2xl font-semibold">{String(company.rating).replace(".", ",")}/5</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/45">Estrutura própria</p>
                  <p className="mt-3 font-display text-2xl font-semibold">{company.area}</p>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/55">Frentes de atuação</p>
                    <p className="mt-2 text-sm leading-7 text-white/70">Editorial, rótulos e embalagens, comunicação visual, publicidade e papelaria.</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {services.map((service) => (
                    <div
                      key={service.title}
                      className="grid gap-2 rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-3 sm:grid-cols-[minmax(0,0.52fr)_minmax(0,1fr)] sm:items-start"
                    >
                      <p className="text-sm font-semibold text-white">{service.title}</p>
                      <p className="text-sm leading-6 text-white/62">{service.items.slice(0, 3).join(" • ")}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { company } from "@/data/company";
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
          <h1 className="mt-6 max-w-4xl font-display text-balance text-[2.45rem] font-semibold leading-none text-ink sm:text-[3.25rem] lg:text-[4.8rem]">
            {company.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">{company.hero.description}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" onClick={scrollToSection(`#${sectionIds.contact}`)}>
              Solicitar orçamento
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            <Button size="lg" variant="secondary" onClick={scrollToSection(`#${sectionIds.services}`)}>
              Conhecer serviços
            </Button>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-black/10 bg-white p-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-muted">Mercado</p>
              <p className="mt-4 text-3xl font-semibold text-ink">{company.years} anos</p>
              <p className="mt-2 text-sm leading-6 text-muted">Atuação consolidada em editorial, embalagens, papelaria e comunicação visual.</p>
            </div>
            <div className="rounded-[1.5rem] border border-black/10 bg-white p-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-muted">Avaliação</p>
              <div className="mt-4 flex items-center gap-2">
                <p className="text-3xl font-semibold text-ink">{String(company.rating).replace(".", ",")}</p>
                <Star className="h-4 w-4 fill-yellow text-yellow" aria-hidden="true" />
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">{company.reviews} avaliações públicas no Google.</p>
            </div>
            <div className="rounded-[1.5rem] border border-black/10 bg-white p-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-muted">Estrutura</p>
              <p className="mt-4 text-3xl font-semibold text-ink">{company.area}</p>
              <p className="mt-2 text-sm leading-6 text-muted">Parque gráfico próprio com etapas de pré-impressão, impressão e acabamento.</p>
            </div>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="relative lg:pl-6"
        >
          <div className="overflow-hidden rounded-[2rem] border-2 border-dashed border-black/12 bg-stone-50">
            <img src="structure.png" alt="Imagem do maquinário" className="h-96 w-full object-cover" width="800" height="384"/>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

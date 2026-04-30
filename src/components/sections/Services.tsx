import { motion } from "framer-motion";
import { services } from "@/data/services";
import { sectionIds } from "@/lib/constants";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Section } from "@/components/layout/Section";

const accents = ["bg-cyan", "bg-magenta", "bg-yellow", "bg-ink", "bg-cyan"] as const;

export function Services() {
  const scrollToSection = useScrollToSection();

  return (
    <Section id={sectionIds.services} className="section-divider bg-white">
      <div className="grid gap-12 xl:grid-cols-[0.78fr_1.22fr] xl:gap-16">
        <div>
          <SectionTitle
            eyebrow="Serviços"
            title="Serviços gráficos para diferentes necessidades"
            description="Da produção editorial à comunicação visual, a Marcograf oferece soluções completas para empresas, marcas, instituições e projetos personalizados."
          />

          <div className="mt-8 rounded-[1.75rem] border border-black/10 bg-editorial-paper p-6">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-muted">Frentes de atuação</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {services.map((service) => (
                <span key={service.title} className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-medium text-graphite">
                  {service.title}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-muted">
              Cada linha de produção exige especificações próprias de material, tiragem, acabamento e apresentação. A proposta comercial é alinhada conforme a demanda.
            </p>

            <div className="mt-8">
              <Button variant="secondary" onClick={scrollToSection(`#${sectionIds.contact}`)}>
                Falar com a equipe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-black/10">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="border-b border-black/10 py-6 sm:py-7"
            >
              <div className="grid gap-4 lg:grid-cols-[auto_minmax(0,0.56fr)_minmax(0,1fr)] lg:gap-6">
                <p className="pt-1 text-sm font-semibold tracking-[0.22em] text-muted">0{index + 1}</p>

                <div>
                  <span className={`mb-4 block h-1 w-14 rounded-full ${accents[index]}`} aria-hidden="true" />
                  <h3 className="text-[1.5rem] font-semibold text-ink sm:text-[1.65rem]">{service.title}</h3>
                </div>

                <div>
                  <p className="text-sm leading-7 text-muted sm:text-[0.96rem]">{service.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <span key={item} className="rounded-full border border-black/10 bg-paper px-3 py-1.5 text-xs font-medium text-graphite">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}

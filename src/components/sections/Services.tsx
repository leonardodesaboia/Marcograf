import { motion } from "framer-motion";
import { services } from "@/data/services";
import { landingImages } from "@/data/visuals";
import { sectionIds } from "@/lib/constants";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Section } from "@/components/layout/Section";

const accents = ["bg-cyan", "bg-magenta", "bg-yellow", "bg-ink", "bg-cyan"] as const;

export function Services() {
  const scrollToSection = useScrollToSection();

  return (
    <Section id={sectionIds.services} className="section-divider bg-surface">
      <div className="grid items-start gap-8 sm:gap-12 xl:grid-cols-[0.78fr_1.22fr] xl:gap-16">
        <div className="xl:sticky xl:top-28 xl:self-start">
          <SectionTitle
            eyebrow="Serviços"
            title="Serviços gráficos para diferentes necessidades"
            description="Linhas de produção para materiais editoriais, corporativos, promocionais e visuais."
          />

          <div className="mt-6 overflow-hidden rounded-[1.35rem] border border-ink/10 bg-editorial-paper shadow-soft sm:mt-8 sm:rounded-[1.9rem]">
            <img
              src={landingImages.services[0]}
              alt="Detalhe de materiais impressos em produção"
              className="h-40 w-full object-cover sm:h-52"
              loading="lazy"
              width="900"
              height="520"
            />
            <div className="p-4 sm:p-6">
            <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-muted sm:tracking-[0.26em]">Frentes de atuação</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {services.map((service) => (
                <span key={service.title} className="rounded-full border border-ink/10 bg-white px-3 py-2 text-[0.92rem] font-medium text-graphite">
                  {service.title}
                </span>
              ))}
            </div>

              <div className="mt-6 sm:mt-8">
              <Button variant="secondary" onClick={scrollToSection(`#${sectionIds.contact}`)}>
                Falar com a equipe
              </Button>
            </div>
            </div>
          </div>
        </div>

        <div className="grid auto-rows-fr gap-3 sm:gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className={index === 4 ? "md:col-span-2" : undefined}
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-ink/10 bg-white shadow-soft sm:rounded-[1.8rem]">
                <img
                  src={landingImages.services[index]}
                  alt={`Imagem ilustrativa de ${service.title.toLowerCase()}`}
                  className="h-36 w-full object-cover sm:h-44"
                  loading="lazy"
                  width="900"
                  height="520"
                />
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className={`block h-1.5 w-16 rounded-full ${accents[index]}`} aria-hidden="true" />
                    <p className="text-[0.82rem] font-semibold tracking-[0.16em] text-muted sm:tracking-[0.22em]">0{index + 1}</p>
                  </div>

                  <div className="mt-5 flex flex-1 flex-col sm:mt-6">
                    <h3 className="text-[1.4rem] font-semibold leading-tight text-ink sm:text-[1.7rem]">{service.title}</h3>
                    <p className="mt-4 text-[0.98rem] leading-7 text-muted">{service.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.items.map((item) => (
                        <span key={item} className="rounded-full border border-ink/10 bg-paper px-3 py-1.5 text-[0.9rem] font-medium text-graphite">
                          {item}
                        </span>
                      ))}
                    </div>
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

import { motion } from "framer-motion";
import { landingImages } from "@/data/visuals";
import { portfolioCases } from "@/data/portfolio";
import { sectionIds } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Section } from "@/components/layout/Section";

export function Portfolio() {
  const visibleCases = portfolioCases;

  return (
    <Section id={sectionIds.portfolio} className="section-divider bg-surface">
      <div className="grid items-start gap-8 sm:gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionTitle
            eyebrow="Portfólio"
            title="Principais linhas de entrega atendidas pela Marcograf"
            description="Uma visão das categorias de material que a gráfica produz para diferentes aplicações e contextos de uso."
          />
        </div>

        <div className="grid auto-rows-fr gap-3 sm:gap-4 md:grid-cols-2 lg:gap-5">
          {visibleCases.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[1.2rem] border border-ink/10 bg-white shadow-soft sm:rounded-[1.8rem]">
                <div className="relative">
                  <img
                    src={landingImages.portfolio[index]}
                    alt={`Imagem ilustrativa de ${item.category.toLowerCase()}`}
                    className="h-40 w-full object-cover sm:h-48 lg:h-56"
                    loading="lazy"
                    width="1200"
                    height="800"
                  />
                  <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-3 sm:inset-x-4 sm:top-4">
                    <span className="rounded-full border border-white/20 bg-ink/72 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-6 lg:p-7">
                  <p className="text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-brand sm:tracking-[0.22em]">Linha de entrega</p>
                  <h3 className="mt-3 text-[1.18rem] font-semibold leading-tight text-ink sm:text-[1.35rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.94rem] leading-6 text-muted">{item.description}</p>
                  <div className="mt-4 rounded-[1rem] border border-ink/10 bg-editorial-paper px-4 py-3 text-[0.86rem] leading-6 text-graphite">
                    {item.note}
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

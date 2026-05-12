import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { company } from "@/data/company";
import { testimonials } from "@/data/testimonials";
import { sectionIds } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Section } from "@/components/layout/Section";

export function Testimonials() {
  const fullStars = Math.floor(company.rating);
  const partialStar = company.rating - fullStars;
  const visibleTestimonials = testimonials;

  return (
    <Section id={sectionIds.testimonials} className="section-divider">
      <div className="grid gap-8 sm:gap-12 lg:grid-cols-[0.74fr_1.26fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionTitle
            eyebrow="Avaliações"
            title="Quem conhece, recomenda"
            description="Clientes destacam qualidade, confiança e compromisso com o prazo."
          />

          <div className="cmyk-stripe hero-aura mt-6 rounded-[1.35rem] border border-white/12 px-4 py-6 text-white shadow-panel sm:mt-8 sm:rounded-[2rem] sm:px-8 sm:py-8">
            <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-white/78 sm:tracking-[0.26em]">Avaliação pública</p>
            <div className="mt-5 flex items-center gap-1 text-yellow" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => {
                const fill = index < fullStars ? 1 : index === fullStars ? partialStar : 0;

                return (
                  <div key={index} className="relative h-5 w-5">
                    <Star className="absolute inset-0 h-5 w-5 text-white/20" />
                    <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                      <Star className="h-5 w-5 fill-current text-yellow" />
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-4xl font-semibold">
              {String(company.rating).replace(".", ",")}
              <span className="ml-1 text-lg font-normal text-white/72">/5</span>
            </p>
            <p className="mt-2 text-[0.98rem] text-white/82">{company.reviews} avaliações no Google</p>
          </div>
        </div>

        <div className="grid auto-rows-fr gap-3 sm:gap-4 md:grid-cols-2">
          {visibleTestimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <div className="flex h-full flex-col rounded-[1.15rem] border border-ink/10 bg-surface px-4 py-5 shadow-soft sm:rounded-[1.75rem] sm:px-5 sm:py-6">
                <div className="flex items-center justify-between gap-3">
                  <Quote className="h-5 w-5 text-brand" aria-hidden="true" />
                  <div className="inline-flex items-center gap-1 text-yellow" aria-label="Avaliação máxima no Google">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-[0.98rem] leading-7 text-graphite">{item.text}</p>
                <div className="mt-auto flex flex-col gap-2 border-t border-ink/8 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-base font-semibold text-ink">{item.name}</p>
                  <div className="inline-flex items-center gap-2 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-brand sm:tracking-[0.2em]">
                    <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                    Google
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

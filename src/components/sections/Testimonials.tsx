import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { company } from "@/data/company";
import { testimonials } from "@/data/testimonials";
import { sectionIds } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Section } from "@/components/layout/Section";

export function Testimonials() {
  return (
    <Section id={sectionIds.testimonials} className="section-divider">
      <div className="grid gap-12 lg:grid-cols-[0.74fr_1.26fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionTitle
            eyebrow="Avaliações"
            title="Quem conhece, recomenda"
            description="A Marcograf possui avaliação 4,7 no Google, com clientes destacando qualidade, confiança, variedade de serviços e compromisso com prazos."
          />

          <div className="cmyk-stripe mt-8 rounded-[2rem] border border-black/10 bg-ink px-6 py-8 text-white shadow-panel sm:px-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-white/55">Avaliação pública</p>
            <p className="mt-5 font-display text-6xl font-semibold">{String(company.rating).replace(".", ",")}</p>
            <p className="mt-2 text-lg text-white/72">de 5 no Google</p>
            <div className="mt-5 flex items-center gap-1 text-yellow">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className={`h-5 w-5 ${index === 4 ? "opacity-40" : "fill-current"}`} />
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-white/72">
              {company.reviews} avaliações públicas reforçando confiança, qualidade e compromisso com a entrega.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className={index === 0 ? "md:col-span-2" : undefined}
            >
              <div
                className={`h-full rounded-[1.75rem] border border-black/10 px-5 py-6 shadow-soft ${
                  index === 0 ? "bg-editorial-paper" : "bg-white"
                }`}
              >
                <p className="text-sm leading-7 text-graphite">{item.text}</p>
                <div className="mt-5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-semibold text-ink">{item.name}</p>
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted">
                    Avaliação pública
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}

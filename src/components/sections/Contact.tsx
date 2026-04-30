import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { company } from "@/data/company";
import { sectionIds } from "@/lib/constants";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Section } from "@/components/layout/Section";

export function Contact() {
  return (
    <Section id={sectionIds.contact} className="section-divider bg-paper">
      <SectionTitle eyebrow="Contato" title={company.contact.title} description={company.contact.subtitle} />

      <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:gap-10">
        <div className="cmyk-stripe relative self-start overflow-hidden rounded-[2rem] border border-black/10 bg-ink px-6 py-8 text-white shadow-panel sm:px-8">
          <div className="bg-technical-grid absolute inset-0 opacity-[0.08]" aria-hidden="true" />
          <div className="relative">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-white/55">Contato comercial</p>
            <h3 className="mt-5 max-w-sm text-[2rem] font-semibold leading-tight sm:text-[2.15rem]">
              Dados diretos para orçamento e alinhamento técnico.
            </h3>

            <div className="mt-8 space-y-6">
              <div className="border-t border-white/12 pt-6">
                <div className="flex items-start gap-4">
                  <Phone className="mt-0.5 h-5 w-5 text-white/70" aria-hidden="true" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Telefone comercial</h4>
                    <a href={company.phoneLink} className="mt-2 inline-block text-sm text-white/72 transition hover:text-white">
                      {company.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/12 pt-6">
                <div className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-5 w-5 text-white/70" aria-hidden="true" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">E-mails</h4>
                    <div className="mt-2 space-y-1 text-sm">
                      <a href={`mailto:${company.emails.budget}`} className="block break-all text-white/72 transition hover:text-white">
                        {company.emails.budget}
                      </a>
                      <a href={`mailto:${company.emails.commercial}`} className="block break-all text-white/72 transition hover:text-white">
                        {company.emails.commercial}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <ContactForm />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-soft sm:p-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-muted">Localização</p>
          <h3 className="mt-4 text-[1.8rem] font-semibold leading-tight text-ink sm:text-[1.95rem]">Estrutura própria em Fortaleza/CE</h3>
          <p className="mt-4 text-sm leading-7 text-muted">
            Atendimento presencial para alinhamento técnico, acompanhamento de produção e retirada combinada, com estrutura própria e fácil acesso.
          </p>

          <div className="mt-6 rounded-[1.5rem] border border-black/10 bg-editorial-paper p-5">
            <p className="text-sm font-semibold text-ink">{company.address.full}</p>
            <p className="mt-2 text-sm leading-6 text-muted">Plus code: {company.address.plusCode}</p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={company.map.searchUrl} target="_blank" rel="noreferrer">
              Ver rotas
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href={company.phoneLink} variant="secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              Ligar para a empresa
            </Button>
            <Button href={`mailto:${company.emails.budget}`} variant="secondary">
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              Enviar e-mail
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
          <iframe
            title="Mapa da Marcograf"
            src={company.map.embedUrl}
            className="h-[320px] w-full md:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}

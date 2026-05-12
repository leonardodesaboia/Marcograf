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

      <div className="mt-8 grid items-start gap-5 sm:mt-10 sm:gap-8 lg:mt-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-10">
        <div className="relative self-start overflow-hidden rounded-[1.35rem] border border-ink/10 bg-editorial-paper px-4 py-6 text-ink shadow-soft sm:rounded-[2rem] sm:px-8 sm:py-8">
          <div className="bg-cmyk-band absolute inset-x-5 top-0 h-1 rounded-full" aria-hidden="true" />
          <div className="relative">
            <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-muted sm:tracking-[0.26em]">Fale com a equipe</p>
            <h3 className="mt-4 max-w-sm text-[1.55rem] font-semibold leading-tight sm:mt-5 sm:text-[2.15rem]">
              Envie a demanda e receba orientação para orçamento.
            </h3>

            <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
              <div className="border-t border-ink/10 pt-5 sm:pt-6">
                <div className="flex items-start gap-4">
                  <Phone className="mt-0.5 h-5 w-5 text-brand" aria-hidden="true" />
                  <div>
                    <h4 className="text-lg font-semibold text-ink">Telefone</h4>
                    <a href={company.phoneLink} className="mt-2 inline-block text-[0.98rem] text-graphite transition hover:text-ink">
                      {company.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-ink/10 pt-5 sm:pt-6">
                <div className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-5 w-5 text-brand" aria-hidden="true" />
                  <div>
                    <h4 className="text-lg font-semibold text-ink">E-mails</h4>
                    <div className="mt-2 space-y-2 text-[0.98rem]">
                      <a href={`mailto:${company.emails.budget}`} className="block break-all text-graphite transition hover:text-ink">
                        {company.emails.budget}
                      </a>
                      <a href={`mailto:${company.emails.commercial}`} className="block break-all text-graphite transition hover:text-ink">
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

      <div className="mt-6 grid gap-5 sm:mt-8 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.35rem] border border-ink/10 bg-surface p-4 shadow-soft sm:rounded-[2rem] sm:p-8">
          <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-muted sm:tracking-[0.24em]">Localização</p>
          <h3 className="mt-4 text-[1.45rem] font-semibold leading-tight text-ink sm:text-[1.95rem]">Estrutura própria em Fortaleza/CE</h3>
          <p className="mt-4 text-[0.98rem] leading-7 text-muted">Atendimento presencial, retirada combinada e acompanhamento de produção.</p>

          <div className="mt-5 rounded-[1rem] border border-ink/10 bg-editorial-paper p-4 sm:mt-6 sm:rounded-[1.5rem] sm:p-5">
            <p className="text-[0.98rem] font-semibold leading-7 text-ink">{company.address.full}</p>
            <p className="mt-2 text-[0.95rem] leading-7 text-muted">Plus code: {company.address.plusCode}</p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button fullWidth href={`mailto:${company.emails.budget}`} className="sm:w-auto">
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              Enviar e-mail
            </Button>
            <Button fullWidth href={company.phoneLink} variant="secondary" className="sm:w-auto">
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              Ligar para a empresa
            </Button>
            <Button fullWidth href={company.map.searchUrl} variant="ghost" target="_blank" rel="noreferrer" className="sm:w-auto">
              Ver rotas
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[1.35rem] border border-ink/10 bg-white shadow-soft sm:rounded-[2rem]">
          <iframe
            title="Mapa da Marcograf"
            src={company.map.embedUrl}
            className="h-[260px] w-full sm:h-[320px] md:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}

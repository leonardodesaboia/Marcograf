import { Mail, MessageCircle, Phone } from "lucide-react";
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
              <div className="border-t border-ink/10 pt-5 sm:pt-6">
                <div className="flex items-start gap-4">
                  <MessageCircle className="mt-0.5 h-5 w-5 text-brand" aria-hidden="true" />
                  <div>
                    <h4 className="text-lg font-semibold text-ink">WhatsApp</h4>
                    <p className="mt-2 text-[0.98rem] leading-7 text-muted">
                      Canal mais direto para enviar especificação inicial e acelerar o atendimento comercial.
                    </p>
                    <div className="mt-4">
                      <Button href={company.whatsappLink} target="_blank" rel="noreferrer" variant="secondary">
                        Falar no WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}

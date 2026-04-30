import { ArrowUpRight, Mail, MapPinned, Phone } from "lucide-react";
import { company } from "@/data/company";
import { sectionIds } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Section } from "@/components/layout/Section";

export function Location() {
  return (
    <Section id={sectionIds.location} className="bg-white">
      <SectionTitle eyebrow="Localização" title={company.location.title} description={company.location.subtitle} />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.14fr_0.86fr] lg:gap-10">
        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
          <iframe
            title="Mapa da Marcograf"
            src={company.map.embedUrl}
            className="h-[420px] w-full lg:h-[100%] lg:min-h-[520px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-editorial-paper p-6 shadow-soft sm:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-[1.15rem] border border-black/10 bg-white p-3 text-ink">
              <MapPinned className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-ink">Marcograf em Fortaleza/CE</h3>
              <p className="mt-1 text-sm text-muted">{company.address.full}</p>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-sm leading-7 text-muted">
            <p>
              Atendimento presencial com estrutura própria e localização acessível para alinhamento técnico,
              acompanhamento de produção e retirada combinada.
            </p>
            <p>Plus code: {company.address.plusCode}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Button href={company.map.searchUrl} target="_blank" rel="noreferrer">
              Ver rotas
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href={company.phoneLink} variant="secondary">
              <Phone className="mr-2 h-4 w-4" />
              Ligar para a empresa
            </Button>
            <Button href={`mailto:${company.emails.budget}`} variant="secondary">
              <Mail className="mr-2 h-4 w-4" />
              Enviar e-mail
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

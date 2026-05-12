import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { navigation } from "@/data/navigation";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const scrollToSection = useScrollToSection();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="cmyk-stripe hero-aura py-14 text-white">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
        <div>
          <img src="/logo_marcograf.png" alt={company.name} className="h-12 w-auto rounded-2xl bg-white px-3 py-2" width="160" height="48" />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/82">
            {company.legalName}
            <br />
            CNPJ: {company.cnpj}
            <br />
            {company.address.full}
          </p>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/74">
            Produção editorial, embalagens, comunicação visual, publicidade e papelaria com estrutura própria em Fortaleza.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/76">Navegação</h3>
          <div className="mt-5 flex flex-col gap-3">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={scrollToSection(item.href)}
                className="text-sm text-white/84 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/76">Contato</h3>
          <div className="mt-5 space-y-4 text-sm text-white/84">
            <a href={company.phoneLink} className="flex items-start gap-3 transition hover:text-white">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="break-words">{company.phone}</span>
            </a>
            <a href={`mailto:${company.emails.budget}`} className="flex items-start gap-3 transition hover:text-white">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="break-all">{company.emails.budget}</span>
            </a>
            <a href={`mailto:${company.emails.commercial}`} className="flex items-start gap-3 transition hover:text-white">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="break-all">{company.emails.commercial}</span>
            </a>
            <a
              href={company.map.searchUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 transition hover:text-white"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="break-words">{company.address.street}</span>
            </a>
          </div>
        </div>
      </Container>
      <Container className="mt-10 border-t border-white/10 pt-6">
        <p className="text-sm text-white/72">© {currentYear} Marcograf Indústria Gráfica. Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
}

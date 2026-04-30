import { Menu, X } from "lucide-react";
import { type MouseEvent, useEffect, useState } from "react";
import { navigation } from "@/data/navigation";
import { company } from "@/data/company";
import { sectionIds } from "@/lib/constants";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (href: string) => (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    setOpen(false);
    scrollToSection(href)(event);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-black/5 transition duration-200",
        scrolled ? "bg-white/92 shadow-[0_12px_32px_rgba(17,17,17,0.06)] backdrop-blur" : "bg-white/72 backdrop-blur",
      )}
    >
      <div className="cmyk-stripe absolute inset-x-0 top-0 hidden h-[3px] sm:block" aria-hidden="true" />

      <Container className="flex min-h-[4.75rem] items-center justify-between gap-4 pt-[3px]">
        <a
          href={`#${sectionIds.home}`}
          onClick={handleNavigate(`#${sectionIds.home}`)}
          className="flex items-center gap-3"
          aria-label={`Voltar ao início - ${company.name}`}
        >
          <img src="/logo_marcograf.png" alt={company.name} className="h-11 w-auto" />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavigate(item.href)}
              className="text-sm font-medium tracking-[0.08em] text-graphite transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" variant="secondary" onClick={handleNavigate(`#${sectionIds.contact}`)}>
            Solicitar orçamento
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-ink md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div id="mobile-menu" className="border-t border-black/5 bg-white/95 backdrop-blur md:hidden">
          <Container className="flex flex-col gap-4 py-5">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavigate(item.href)}
                className="text-base font-medium text-graphite"
              >
                {item.label}
              </a>
            ))}
            <Button fullWidth onClick={handleNavigate(`#${sectionIds.contact}`)}>
              Solicitar orçamento
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

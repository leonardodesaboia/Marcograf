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
        "sticky top-0 z-50 bg-surface/72 transition duration-200 backdrop-blur-xl",
        scrolled ? "shadow-[0_18px_40px_rgba(23,20,22,0.08)]" : "shadow-[0_8px_24px_rgba(23,20,22,0.04)]",
      )}
    >
      <Container className="pt-2.5 sm:pt-4">
        <div
          className={cn(
            "flex min-h-[4rem] items-center justify-between gap-3 rounded-[1.35rem] border px-3 transition duration-200 sm:min-h-[4.85rem] sm:rounded-full sm:px-5",
            scrolled
              ? "border-ink/10 bg-surface/96 shadow-soft"
              : "border-ink/10 bg-surface/92 shadow-[0_12px_34px_rgba(23,20,22,0.06)]",
          )}
        >
          <a
            href={`#${sectionIds.home}`}
            onClick={handleNavigate(`#${sectionIds.home}`)}
            className="flex items-center gap-3"
            aria-label={`Voltar ao início - ${company.name}`}
          >
            <img src="/logo_marcograf.png" alt={company.name} className="h-9 w-auto sm:h-11" />
            <div className="hidden min-[1180px]:block">
              <p className="text-sm font-semibold text-ink">Marcograf</p>
              <p className="text-xs uppercase tracking-[0.24em] text-muted">Fortaleza • 25+ anos</p>
            </div>
          </a>

          <nav className="hidden items-center gap-2 rounded-full border border-ink/10 bg-white/96 px-2 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] md:flex" aria-label="Navegação principal">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavigate(item.href)}
                className="rounded-full px-4 py-2 text-sm font-medium tracking-[0.02em] text-graphite transition hover:bg-paper hover:text-ink"
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
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-white text-ink md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-menu" className="md:hidden">
          <Container className="pt-3">
            <div className="rounded-[1.4rem] border border-ink/8 bg-surface/96 p-3 shadow-soft backdrop-blur-xl sm:rounded-[2rem] sm:p-5">
              <div className="flex flex-col gap-2.5 sm:gap-4">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavigate(item.href)}
                    className="rounded-[1rem] border border-transparent bg-paper/60 px-4 py-3 text-[0.95rem] font-medium text-graphite sm:rounded-2xl sm:text-base"
                  >
                    {item.label}
                  </a>
                ))}
                <Button fullWidth onClick={handleNavigate(`#${sectionIds.contact}`)}>
                  Solicitar orçamento
                </Button>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

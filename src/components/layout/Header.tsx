import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { type MouseEvent, useEffect, useState } from "react";
import { navigation } from "@/data/navigation";
import { company } from "@/data/company";
import { sectionIds } from "@/lib/constants";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const desktopNav = navigation.filter(
  (item) => item.href !== "#inicio" && item.href !== "#localizacao",
);

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavigate = (href: string) => (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    setOpen(false);
    scrollToSection(href)(event);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur-xl transition duration-200",
        scrolled
          ? "bg-surface/96 shadow-[0_12px_36px_rgba(15,15,20,0.09)]"
          : "bg-surface/80 shadow-[0_4px_20px_rgba(15,15,20,0.05)]",
      )}
    >
      <div className="h-[3px] bg-cmyk-band" aria-hidden="true" />

      <Container className="py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-4">

          <a
            href={`#${sectionIds.home}`}
            onClick={handleNavigate(`#${sectionIds.home}`)}
            className="flex shrink-0 items-center gap-3"
            aria-label={`Voltar ao início - ${company.name}`}
          >
            <img src="/logo_marcograf.png" alt={company.name} className="h-9 w-auto sm:h-10" />
            <div className="hidden min-[1180px]:block leading-none">
              <p className="text-[0.88rem] font-semibold text-ink">Marcograf</p>
              <p className="mt-0.5 text-[0.63rem] uppercase tracking-[0.26em] text-muted">Fortaleza · 25+ anos</p>
            </div>
          </a>

          <nav
            className="hidden items-center gap-0.5 rounded-full border border-ink/[0.07] bg-white/95 px-1.5 py-1.5 shadow-[0_2px_12px_rgba(15,15,20,0.07),inset_0_1px_0_rgba(255,255,255,0.9)] lg:flex"
            aria-label="Navegação principal"
          >
            {desktopNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavigate(item.href)}
                className="rounded-full px-3.5 py-2 text-[0.81rem] font-medium tracking-[0.01em] text-graphite transition-colors hover:bg-ink/[0.045] hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button size="sm" onClick={handleNavigate(`#${sectionIds.contact}`)}>
              Solicitar orçamento
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={handleNavigate(`#${sectionIds.contact}`)}
              className="hidden min-[400px]:inline-flex items-center rounded-full border border-brand/25 bg-brand/[0.07] px-4 py-2 text-[0.81rem] font-semibold text-brand transition hover:bg-brand/[0.13] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Orçamento
            </button>

            <button
              type="button"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-white text-ink shadow-soft transition hover:bg-paper"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.14 }}
                    className="flex"
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.14 }}
                    className="flex"
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 top-[3.75rem] bg-ink/20 backdrop-blur-[2px] lg:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="menu"
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative lg:hidden"
            >
              <Container className="pb-4 pt-2.5">
                <div className="overflow-hidden rounded-[1.4rem] border border-ink/[0.07] bg-surface/96 shadow-panel backdrop-blur-xl">
                  <div className="flex flex-col gap-0.5 p-2">
                    {navigation.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={handleNavigate(item.href)}
                        className="rounded-[0.9rem] px-4 py-3 text-[0.95rem] font-medium text-graphite transition-colors hover:bg-ink/[0.04] hover:text-ink"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                  <div className="border-t border-ink/[0.07] p-3">
                    <Button fullWidth onClick={handleNavigate(`#${sectionIds.contact}`)}>
                      Solicitar orçamento
                    </Button>
                  </div>
                </div>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

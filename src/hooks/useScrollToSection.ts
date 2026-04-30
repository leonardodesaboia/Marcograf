import { type MouseEvent as ReactMouseEvent, useCallback } from "react";

export function useScrollToSection() {
  return useCallback(
    (hash: string) =>
      (event?: Pick<MouseEvent, "preventDefault"> | Pick<ReactMouseEvent, "preventDefault">) => {
        event?.preventDefault();

        const element = document.querySelector(hash);
        if (!element) {
          return;
        }

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        element.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        });

        window.history.replaceState(null, "", hash);
      },
    [],
  );
}

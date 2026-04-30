import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export function WhatsAppButton() {
  return (
    <a
      href={company.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Marcograf pelo WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-success text-white shadow-soft transition hover:bg-success/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

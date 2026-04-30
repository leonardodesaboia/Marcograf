import { services } from "@/data/services";

export const sectionIds = {
  home: "inicio",
  about: "sobre",
  services: "servicos",
  structure: "estrutura",
  differentials: "diferenciais",
  testimonials: "avaliacoes",
  process: "processo",
  contact: "contato",
  location: "localizacao",
} as const;

export const budgetMailSubject = "Solicitação de orçamento pelo site";

export const serviceOptions = [...services.map((service) => service.title), "Outro"] as const;

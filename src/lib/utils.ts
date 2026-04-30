import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { budgetMailSubject } from "@/lib/constants";
import { company } from "@/data/company";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ContactFormData = {
  name: string;
  company?: string;
  email: string;
  phone: string;
  serviceType: string;
  quantity?: string;
  deadline?: string;
  message: string;
};

function getFieldValue(value?: string) {
  return value?.trim() ? value.trim() : "Não informado";
}

export function buildMailtoBody(data: ContactFormData) {
  return [
    "Olá, gostaria de solicitar um orçamento com a Marcograf.",
    "",
    `Nome: ${getFieldValue(data.name)}`,
    `Empresa: ${getFieldValue(data.company)}`,
    `E-mail: ${getFieldValue(data.email)}`,
    `Telefone: ${getFieldValue(data.phone)}`,
    `Serviço: ${getFieldValue(data.serviceType)}`,
    `Quantidade estimada: ${getFieldValue(data.quantity)}`,
    `Prazo desejado: ${getFieldValue(data.deadline)}`,
    "",
    "Mensagem:",
    getFieldValue(data.message),
  ].join("\n");
}

export function buildMailtoLink(data: ContactFormData) {
  const params = new URLSearchParams({
    subject: budgetMailSubject,
    body: buildMailtoBody(data).replace(/\n/g, "\r\n"),
  });

  return `mailto:${company.emails.budget}?${params.toString()}`;
}

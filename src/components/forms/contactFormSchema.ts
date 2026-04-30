import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Informe seu nome."),
  company: z.string().optional(),
  email: z.string().email("Informe um e-mail válido."),
  phone: z.string().min(8, "Informe um telefone válido."),
  serviceType: z.string().min(1, "Selecione o tipo de serviço."),
  quantity: z.string().optional(),
  deadline: z.string().optional(),
  message: z.string().min(10, "Descreva brevemente sua solicitação."),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

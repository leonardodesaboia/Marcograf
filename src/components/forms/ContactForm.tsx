import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Copy, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { serviceOptions } from "@/lib/constants";
import { buildMailtoBody, buildMailtoLink } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { contactFormSchema, type ContactFormSchema } from "./contactFormSchema";

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) {
    return digits ? `(${digits}` : "";
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      serviceType: "",
      quantity: "",
      deadline: "",
      message: "",
    },
  });

  const previewFields = watch();
  const mailtoLink = buildMailtoLink({
    name: previewFields.name ?? "",
    company: previewFields.company ?? "",
    email: previewFields.email ?? "",
    phone: previewFields.phone ?? "",
    serviceType: previewFields.serviceType ?? "",
    quantity: previewFields.quantity ?? "",
    deadline: previewFields.deadline ?? "",
    message: previewFields.message ?? "",
  });
  const mailPreview = buildMailtoBody({
    name: previewFields.name ?? "",
    company: previewFields.company ?? "",
    email: previewFields.email ?? "",
    phone: previewFields.phone ?? "",
    serviceType: previewFields.serviceType ?? "",
    quantity: previewFields.quantity ?? "",
    deadline: previewFields.deadline ?? "",
    message: previewFields.message ?? "",
  });

  const onSubmit = (_data: ContactFormSchema) => {
    setSubmitted(true);
    window.location.assign(mailtoLink);
  };

  const handleCopyMessage = async () => {
    const draft = [`Para: orcamento@marcograf.com.br`, `Assunto: Solicitação de orçamento pelo site`, "", mailPreview].join(
      "\n",
    );

    await navigator.clipboard.writeText(draft);
    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const fieldClassName =
    "mt-2 min-h-11 w-full rounded-[0.9rem] border border-ink/10 bg-paper/45 px-3.5 text-[0.98rem] text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 sm:min-h-12 sm:rounded-[1rem] sm:px-4";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-[1.35rem] border border-ink/10 bg-surface p-4 shadow-soft sm:space-y-5 sm:rounded-[2rem] sm:p-8">
      <div className="border-b border-ink/8 pb-4 sm:pb-5">
        <h3 className="text-xl font-semibold text-ink sm:text-2xl">Envie os dados do projeto</h3>
        <p className="mt-2 text-[0.98rem] leading-7 text-muted">Informe o básico do projeto para receber um retorno mais objetivo.</p>
      </div>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        <label className="text-[0.98rem] font-medium text-ink">
          Nome *
          <input className={fieldClassName} {...register("name")} placeholder="Seu nome" />
          {errors.name ? <span className="mt-2 block text-sm text-red-600">{errors.name.message}</span> : null}
        </label>

        <label className="text-[0.98rem] font-medium text-ink">
          Empresa
          <input className={fieldClassName} {...register("company")} placeholder="Nome da empresa" />
        </label>

        <label className="text-[0.98rem] font-medium text-ink">
          E-mail *
          <input className={fieldClassName} {...register("email")} placeholder="voce@empresa.com" type="email" />
          {errors.email ? <span className="mt-2 block text-sm text-red-600">{errors.email.message}</span> : null}
        </label>

        <label className="text-[0.98rem] font-medium text-ink">
          Telefone *
          <input
            className={fieldClassName}
            {...register("phone", {
              onChange: (event) => {
                event.target.value = formatPhone(event.target.value);
              },
            })}
            inputMode="numeric"
            placeholder="(85) 99999-9999"
          />
          {errors.phone ? <span className="mt-2 block text-sm text-red-600">{errors.phone.message}</span> : null}
        </label>
      </div>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
        <label className="text-[0.98rem] font-medium text-ink md:col-span-1">
          Tipo de serviço *
          <select className={fieldClassName} defaultValue="" {...register("serviceType")}>
            <option value="" disabled>
              Selecione
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.serviceType ? <span className="mt-2 block text-sm text-red-600">{errors.serviceType.message}</span> : null}
        </label>

        <label className="text-[0.98rem] font-medium text-ink">
          Quantidade estimada
          <input className={fieldClassName} {...register("quantity")} placeholder="Ex.: 2.000 unidades" />
        </label>

        <label className="text-[0.98rem] font-medium text-ink">
          Prazo desejado
          <input className={fieldClassName} {...register("deadline")} placeholder="Ex.: 15 dias" />
        </label>
      </div>

      <label className="text-[0.98rem] font-medium text-ink">
        Mensagem *
        <textarea
          className="mt-2 min-h-32 w-full rounded-[1rem] border border-ink/10 bg-paper/45 px-3.5 py-3 text-[0.98rem] text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 sm:min-h-36 sm:rounded-[1.25rem] sm:px-4"
          {...register("message")}
          placeholder="Descreva o material, formato, quantidade, acabamento e qualquer requisito importante."
        />
        {errors.message ? <span className="mt-2 block text-sm text-red-600">{errors.message.message}</span> : null}
      </label>

      <div className="rounded-[1rem] border border-ink/10 bg-editorial-paper p-4 sm:rounded-[1.5rem] sm:p-5">
        <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-muted sm:tracking-[0.24em]">Envio</p>
        <p className="mt-3 text-[0.95rem] leading-7 text-graphite">
          Você pode abrir seu cliente de e-mail com os dados preenchidos ou copiar a mensagem para enviar manualmente.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <Button type="button" size="lg" fullWidth variant="secondary" onClick={handleCopyMessage} className="sm:w-auto">
            {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
            {copied ? "Mensagem copiada" : "Copiar mensagem"}
          </Button>
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            fullWidth
            className="border-ink bg-ink text-paper hover:border-brand-strong hover:bg-brand-strong sm:w-auto"
          >
            <Send className="mr-2 h-4 w-4" />
            Abrir cliente de e-mail
          </Button>
        </div>
      </div>

      {submitted ? (
        <p className="rounded-[1.25rem] border border-success/20 bg-success/10 px-4 py-3 text-sm text-success">
          Cliente de e-mail acionado. Se o assunto ou a mensagem não forem preenchidos automaticamente, use o botão
          “Copiar mensagem” e cole no e-mail manualmente.
        </p>
      ) : null}
    </form>
  );
}

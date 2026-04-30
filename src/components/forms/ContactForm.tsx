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
    "mt-2 min-h-12 w-full rounded-[1rem] border border-black/10 bg-white px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-ink focus:ring-2 focus:ring-black/5";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-[2rem] border border-black/10 bg-white p-6 shadow-soft sm:p-8">
      <div className="border-b border-black/8 pb-5">
        <h3 className="text-2xl font-semibold text-ink">Envie os dados do projeto</h3>
        <p className="mt-2 text-sm leading-7 text-muted">
          Quanto mais contexto sobre material, tiragem, formato e acabamento, mais preciso tende a ser o alinhamento comercial.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-medium text-ink">
          Nome *
          <input className={fieldClassName} {...register("name")} placeholder="Seu nome" />
          {errors.name ? <span className="mt-2 block text-sm text-red-600">{errors.name.message}</span> : null}
        </label>

        <label className="text-sm font-medium text-ink">
          Empresa
          <input className={fieldClassName} {...register("company")} placeholder="Nome da empresa" />
        </label>

        <label className="text-sm font-medium text-ink">
          E-mail *
          <input className={fieldClassName} {...register("email")} placeholder="voce@empresa.com" type="email" />
          {errors.email ? <span className="mt-2 block text-sm text-red-600">{errors.email.message}</span> : null}
        </label>

        <label className="text-sm font-medium text-ink">
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

      <div className="grid gap-5 md:grid-cols-3">
        <label className="text-sm font-medium text-ink md:col-span-1">
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

        <label className="text-sm font-medium text-ink">
          Quantidade estimada
          <input className={fieldClassName} {...register("quantity")} placeholder="Ex.: 2.000 unidades" />
        </label>

        <label className="text-sm font-medium text-ink">
          Prazo desejado
          <input className={fieldClassName} {...register("deadline")} placeholder="Ex.: 15 dias" />
        </label>
      </div>

      <label className="text-sm font-medium text-ink">
        Mensagem *
        <textarea
          className="mt-2 min-h-36 w-full rounded-[1.25rem] border border-black/10 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted focus:border-ink focus:ring-2 focus:ring-black/5"
          {...register("message")}
          placeholder="Descreva o material, formato, quantidade, acabamento e qualquer requisito importante."
        />
        {errors.message ? <span className="mt-2 block text-sm text-red-600">{errors.message.message}</span> : null}
      </label>

      <div className="rounded-[1.5rem] border border-black/10 bg-editorial-paper p-5">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-muted">Prévia do e-mail</p>
        <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-7 text-graphite">{mailPreview}</pre>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="button" size="lg" variant="secondary" onClick={handleCopyMessage}>
            {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
            {copied ? "Mensagem copiada" : "Copiar mensagem"}
          </Button>
          <Button type="submit" size="lg" disabled={isSubmitting}>
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

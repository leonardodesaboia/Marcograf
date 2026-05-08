import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({ eyebrow, title, description, align = "left" }: SectionTitleProps) {
  const centered = align === "center";

  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
      {eyebrow ? (
        <span
          className={cn(
            "mb-4 inline-flex items-center gap-2.5 text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-muted sm:mb-5 sm:gap-3 sm:tracking-[0.28em]",
            centered && "justify-center",
          )}
        >
          <span className="h-px w-10 bg-brand" />
          {eyebrow}
          <span className="h-px w-10 bg-ink/12" />
        </span>
      ) : null}
      <h2 className="font-display text-balance text-[1.95rem] font-semibold leading-[1.02] tracking-tight text-ink sm:text-[2.85rem]">
        {title}
      </h2>
      {description ? <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-[1.05rem] sm:leading-8">{description}</p> : null}
    </div>
  );
}

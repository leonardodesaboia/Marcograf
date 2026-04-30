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
            "mb-5 inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted",
            centered && "justify-center",
          )}
        >
          <span className="h-px w-10 bg-cyan" />
          {eyebrow}
          <span className="h-px w-10 bg-black/12" />
        </span>
      ) : null}
      <h2 className="font-display text-balance text-[2rem] font-semibold tracking-tight text-ink sm:text-[2.5rem]">
        {title}
      </h2>
      {description ? <p className="mt-4 max-w-2xl text-base leading-8 text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}

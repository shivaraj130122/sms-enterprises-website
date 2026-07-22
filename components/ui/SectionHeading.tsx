import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <Reveal className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      {eyebrow && (
        <span
          className={cn(
            "mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-gold-500",
            centered && "justify-center"
          )}
        >
          <span className="h-px w-8 bg-gold-500" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold leading-tight text-ivory sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>
      )}
    </Reveal>
  );
}
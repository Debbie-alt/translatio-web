import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-raise px-3 py-1 text-[13px] tracking-wide text-subtle">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-6 text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.6rem]">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-lg leading-relaxed text-soft ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
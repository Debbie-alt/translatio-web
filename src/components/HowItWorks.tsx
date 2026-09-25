import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const STEPS = [
  {
    num: "01",
    command: "npm i @debbie-alt/translatekit",
    title: "Install",
    body: "One lean package. The core runtime is tiny and fully tree-shakeable — no framework required.",
  },
  {
    num: "02",
    command: "configure({ provider, apiKey })",
    title: "Configure",
    body: "Point Translatio at your translation provider once at startup. Type-safe, validated, done.",
  },
  {
    num: "03",
    command: "await translate({ text, targetLanguage })",
    title: "Translate",
    body: "Translate on demand from anywhere — or drop in the React component and let it do the work.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="relative border-t border-line py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How Translatio works"
          title={
            <>
              From install to ship in{" "}
              <span className="font-serif italic font-normal text-lavender">
                three steps
              </span>
              .
            </>
          }
          description="Translatio stays out of your architecture. There is no CLI to wire in, no build step to adopt — just code that reads like documentation."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.1} className="h-full">
              <div className="group relative flex h-full flex-col rounded-xl border border-line bg-raise p-7 transition-colors hover:border-line-strong">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-faint">
                    {step.num}
                  </span>
                  <span
                    className="h-px w-8 bg-line-strong transition-all duration-500 group-hover:w-14 group-hover:bg-accent/70"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-12 text-xl font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-soft">
                  {step.body}
                </p>
                <div className="mt-auto pt-6">
                  <code className="inline-block max-w-full truncate rounded-md border border-line bg-code-bg px-3 py-2 font-mono text-[12px] text-accent">
                    {step.command}
                  </code>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
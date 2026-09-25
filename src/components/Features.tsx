import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const FEATURES = [
  {
    title: "Provider agnostic",
    body: "DeepL today, Google tomorrow, anything behind the same typed interface. Swap providers without touching app code.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 3h10M4 15h10M4 9h7M9 3v3m-5-3v3m5 9v-2m-5 2v-2" strokeLinecap="round" />
      </svg>
    ),
    tone: "text-accent",
  },
  {
    title: "Runtime translation",
    body: "No build step, no code generation, no catalog files to commit. Content in, translated content out — at request time.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="9" r="6.5" />
        <path d="M9 2.5v13M9 9l4-2.5M9 9l-3.5 2" strokeLinecap="round" />
      </svg>
    ),
    tone: "text-blue",
  },
  {
    title: "End-to-end types",
    body: "Options, responses and errors are fully typed. Autocomplete guides you; the compiler keeps you honest.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="12" height="10" rx="1.5" />
        <path d="M3 8h12M7 4v10" strokeLinecap="round" />
      </svg>
    ),
    tone: "text-lavender",
  },
  {
    title: "Forgiving failure",
    body: "Automatic retries with exponential backoff, per-key fallbacks and rich error messages when things do go wrong.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 3v5l3.5 2M16 9a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" strokeLinecap="round" />
      </svg>
    ),
    tone: "text-accent",
  },
  {
    title: "Tiny footprint",
    body: "Tree-shakeable ESM with no runtime dependencies. The core stays comfortably under 2 kB minified.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 15 15 2M2 2v13h13" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tone: "text-blue",
  },
  {
    title: "Framework-agnostic",
    body: "Works in Node, edge runtimes and the browser. React is optional — the core API is pure JavaScript.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 7l7-5 7 5-7 5-7-5Z" strokeLinejoin="round" />
        <path d="M2 12l7 5 7-5M2 16l7 5 7-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tone: "text-lavender",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Translatio"
          title={
            <>
              Small by design.{" "}
              <span className="font-serif italic font-normal text-lavender">
                Reliable
              </span>{" "}
              by default.
            </>
          }
          description="Every feature exists to remove a decision you should not have to make about internationalization."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 0.08} className="h-full">
              <div className="group flex h-full flex-col rounded-xl border border-line bg-raise p-7 transition-colors hover:border-line-strong">
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-code-bg ${feature.tone}`}
                  aria-hidden="true"
                >
                  {feature.icon}
                </span>
                <h3 className="mt-6 text-base font-medium text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-soft">
                  {feature.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
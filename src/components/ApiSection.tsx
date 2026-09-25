import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { CodeWindow } from "./CodeWindow";

const SNIPPET = `import { configure, translate } from "@debbie-alt/translatekit";

configure({ provider: "deepl", apiKey: process.env.DEEPL_API_KEY });

const t = {
  title: "Dashboard",
  action: "Sign in",
};

const result = await translate({
  text: t.title,
  targetLanguage: "ja",
});

// "ダッシュボード"`;

const STATS = [
  { value: "0", label: "dependencies" },
  { value: "100%", label: "typed by default" },
  { value: "0", label: "build steps added" },
  { value: "30+", label: "languages" },
];

const POINTS = [
  "One synchronous to set up, promise-based to call — no generics gymnastics.",
  "Full TypeScript coverage: options, responses and errors are typed end to end.",
  "Provider agnostic: DeepL today, more tomorrow, all behind the same interface.",
];

export function ApiSection() {
  return (
    <section id="api" className="relative border-t border-line py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_50%_50%_at_20%_40%,black,transparent)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Developer-friendly API"
            title={
              <>
                A single function,{" "}
                <span className="font-serif italic font-normal text-lavender">
                  anything
                </span>{" "}
                it can translate.
              </>
            }
            description="Configure once, then translate wherever you need it — a server route, a cron job, a client. Translatekit never asks you to restructure your app."
          />

          <ul className="mt-8 space-y-4">
            {POINTS.map((point) => (
              <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-soft">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line bg-panel text-accent" aria-hidden="true">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M2.5 6.5 5 9l4.5-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>

          <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-line bg-raise px-4 py-3">
                <dt className="order-2 text-[11px] text-faint">{stat.label}</dt>
                <dd className="order-1 text-xl font-medium tracking-tight text-ink">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Reveal delay={0.1}>
          <CodeWindow filename="lib/i18n.ts" code={SNIPPET} label="runtime" />
        </Reveal>
      </div>
    </section>
  );
}
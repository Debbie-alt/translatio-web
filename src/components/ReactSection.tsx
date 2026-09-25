import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { CodeWindow } from "./CodeWindow";

const SNIPPET = `import { configure } from "@debbie-alt/translatekit";
import { Autotranslate } from "@debbie-alt/translatekit";

configure({ provider: "deepl", apiKey: process.env.DEEPL_API_KEY });

export function Settings({ locale }) {
  return (
    <section>
      <Autotranslate targetLanguage={locale}>
        Notifications disabled
      </Autotranslate>
      <Autotranslate targetLanguage={locale}>
        Data processed in {region} — GDPR complaint
      </Autotranslate>
    </section>
  );
}`;

const NOTES = [
  {
    title: "Re-translates on change",
    body: "When targetLanguage changes, the component translates again automatically and swaps in the result.",
  },
  {
    title: "Just text in, text out",
    body: "Children are plain strings. There is no AST step, no keys to manage, no catalog to keep in sync.",
  },
  {
    title: "Works with any provider",
    body: "Autotranslate uses the same configured provider as translate() — one config for the whole app.",
  },
];

export function ReactSection() {
  return (
    <section id="react" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <CodeWindow
            filename="components/Settings.tsx"
            code={SNIPPET}
            label="tsx — react"
          />
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="React component"
            title={
              <>
                A component you can{" "}
                <span className="font-serif italic font-normal text-lavender">
                  drop in
                </span>
                .
              </>
            }
            description="Wrap any string in Autotranslate and it becomes a live, translated label. No context provider to mount, no hooks to wire."
          />

          <ul className="mt-8 space-y-6">
            {NOTES.map((note) => (
              <li key={note.title} className="flex gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-raise text-blue" aria-hidden="true">
                  <svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4l5 5-5 5M9 4l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-medium text-ink">{note.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-soft">{note.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
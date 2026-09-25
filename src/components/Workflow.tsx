import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Highlight } from "../lib/highlight.tsx";

const TERMINAL = `$ npm i @debbie-alt/translatekit
added 1 package

$ cat translatekit.config.ts
import { configure } from "@debbie-alt/translatekit";
configure({ provider: "deepl", apiKey: process.env.DEEPL_API_KEY });

$ node app.mjs
import { translate } from "@debbie-alt/translatekit";
const result = await translate({
  text: "Hello world",
  targetLanguage: "ja",
});
// "こんにちは、世界"

$ npm run build
  ✓ built`;

const STEPS = [
  { key: "01", label: "Install" },
  { key: "02", label: "Configure" },
  { key: "03", label: "Translate" },
  { key: "04", label: "Ship" },
];

export function Workflow() {
  return (
    <section className="relative border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Developer workflow"
          title={
            <>
              A workflow that{" "}
              <span className="font-serif italic font-normal text-lavender">
                disappears
              </span>
              .
            </>
          }
          description="Install, configure, translate, ship. Translatekit never forces a process on you — the terminal is the whole story."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.key} delay={i * 0.07}>
              <div className="flex items-center gap-3 rounded-lg border border-line bg-raise px-4 py-3">
                <span className="font-mono text-xs text-faint">{step.key}</span>
                <span className="text-sm text-soft">{step.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-6">
          <div className="overflow-hidden rounded-xl border border-line bg-code-bg shadow-[0_24px_60px_-28px_rgba(0,0,0,0.75)]">
            <div className="flex items-center gap-3 border-b border-line bg-raise px-4 py-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-panel-2 ring-1 ring-line-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-panel-2 ring-1 ring-line-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-panel-2 ring-1 ring-line-strong" />
              </div>
              <span className="font-mono text-xs text-faint">
                workflow — zsh
              </span>
            </div>
            <div className="scrollbar-thin overflow-x-auto">
              <pre className="px-5 py-4 font-mono text-[12.5px] leading-[1.8]">
                <code className="whitespace-pre">
                  <Highlight code={TERMINAL} />
                </code>
              </pre>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
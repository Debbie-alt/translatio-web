import { Reveal } from "./Reveal";

const LANGUAGES = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Portuguese",
  "Dutch",
  "Japanese",
  "Korean",
  "Mandarin",
  "Polish",
  "Swedish",
  "Turkish",
  "Russian",
  "Arabic",
  "Hindi",
  "Indonesian",
  "Vietnamese",
  "Czech",
  "Greek",
  "Danish",
  "Finnish",
  "Hungarian",
  "Norwegian",
];

export function Languages() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-raise">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 text-[13px] tracking-wide text-subtle">
                <span className="h-1.5 w-1.5 rounded-full bg-lavender" />
                Supported languages
              </span>
              <h2 className="mt-6 text-3xl font-medium leading-[1.1] tracking-[-0.02em] sm:text-4xl">
                Speak{" "}
                <span className="font-serif italic font-normal text-accent">
                  30+ languages
                </span>
                , automatically.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-soft">
                Translatio ships with automatic source detection and a fast,
                provider-backed translation path. Your app never needs to tell
                it what language the input is in.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px] text-subtle">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent" /> Auto source
                  detection
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent" /> Runtime at
                  request time
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent" /> Type-safe
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="scrollbar-thin -mx-2 grid grid-cols-3 gap-2.5 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
                {LANGUAGES.map((lang) => (
                  <div
                    key={lang}
                    className="flex items-center justify-between rounded-md border border-line bg-code-bg px-3 py-2.5 transition-colors hover:border-line-strong"
                  >
                    <span className="truncate text-[13px] text-soft">{lang}</span>
                    <span className="ml-2 font-mono text-[10px] uppercase text-faint">
                      {lang.slice(0, 2)}
                    </span>
                  </div>
                ))}
                <div className="flex items-center justify-center rounded-md border border-dashed border-line-strong px-3 py-2.5">
                  <span className="font-mono text-[13px] text-subtle">
                    + 7 more
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
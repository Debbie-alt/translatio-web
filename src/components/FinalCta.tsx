import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section id="get-started" className="relative border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-raise px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,black,transparent)]" />
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[460px] -translate-x-1/2 rounded-full opacity-[0.14] blur-[100px]" style={{ background: "radial-gradient(closest-side, var(--color-lavender), transparent)" }} />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
                Ship in every{" "}
                <span className="font-serif italic font-normal text-accent">
                  language
                </span>{" "}
                today.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-soft">
                Add Translatekit to your project in under a minute and let your
                users read your product in the language they think in.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#top"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-7 py-3.5 text-[15px] font-medium text-[#0c1513] transition-colors hover:bg-[#8fd0c3] sm:w-auto"
                >
                  Get Started
                </a>
                <a
                  href="#api"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-line-strong bg-canvas px-7 py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-panel sm:w-auto"
                >
                  Read the docs
                </a>
              </div>

              <p className="mt-8 font-mono text-[13px] text-faint">
                <span className="text-accent">$</span> npm i @debbie-alt/translatekit ·
                MIT licensed
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
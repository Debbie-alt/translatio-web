import { motion, type Variants } from "framer-motion";
import { CodeWindow } from "./CodeWindow";

const API_SNIPPET = `import { configure, translate } from "@debbie-alt/translatekit";

configure({
  provider: "deepl",
  apiKey: process.env.DEEPL_API_KEY,
});

const result = await translate({
  text: "Hello world",
  targetLanguage: "fr",
});

console.log(result); // "Bonjour le monde"`;

const REACT_SNIPPET = `import { Autotranslate } from "@debbie-alt/translatekit";

function App() {
  return (
    <Autotranslate targetLanguage="ar">
      Welcome back, developer.
    </Autotranslate>
  );
}`;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full opacity-[0.13] blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-blue), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-raise px-3.5 py-1.5 text-[13px] tracking-wide text-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Translatio 0.1 — translation toolkit for developers
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-8 text-balance text-5xl font-medium leading-[1.04] tracking-[-0.03em] sm:text-6xl md:text-[4.6rem]"
          >
            Effortless translation
            <br />
            for{" "}
            <span className="font-serif italic font-normal text-lavender">
              developers
            </span>
            .
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-soft"
          >
            A lean API and a drop-in React component translate your product
            into 30+ languages at runtime. No build pipeline, no SDK sprawl —
            just typed, reliable, runtime translation.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#get-started"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-[15px] font-medium text-[#0c1513] transition-colors hover:bg-[#8fd0c3] sm:w-auto"
            >
              Get Started
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                <path d="M3 8h10m0 0-4-4m4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#api"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-line-strong bg-raise px-7 py-3.5 text-[15px] font-medium text-ink transition-colors hover:border-line-strong hover:bg-panel sm:w-auto"
            >
              Explore the API
            </a>
          </motion.div>

          <motion.p variants={item} className="mt-6 font-mono text-[13px] text-faint">
            <span className="text-accent">$</span> npm i @debbie-alt/translatekit
          </motion.p>
        </motion.div>

        {/* Code visualization */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          <div
            className="pointer-events-none absolute -inset-x-6 -top-10 bottom-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"
            aria-hidden="true"
          />

          <div className="relative grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <CodeWindow
                  filename="translate.ts"
                  code={API_SNIPPET}
                  label="ts"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="lg:pt-12"
              >
                <CodeWindow
                  filename="App.tsx"
                  code={REACT_SNIPPET}
                  label="tsx — react"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Floating status chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute -top-8 right-2 hidden items-center gap-2 rounded-lg border border-line bg-panel px-3 py-2 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.8)] sm:flex"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[12px] text-soft">
              es → en
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute -bottom-8 left-4 hidden items-center gap-2 rounded-lg border border-line bg-panel px-3 py-2 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.8)] sm:flex"
          >
            <span className="text-lavender">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path d="M2 2l5 5-5 5M7 2l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="font-mono text-[12px] text-soft">30+ languages</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
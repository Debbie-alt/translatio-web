import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Wordmark } from "./Wordmark";

const LINKS = [
  { label: "Documentation", href: "#docs" },
  { label: "Features", href: "#features" },
];

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-8 px-5 sm:px-8">
        <Wordmark />

        <nav
          className="ml-6 hidden items-center gap-7 md:flex"
          aria-label="Primary"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
            <a
              href="https://github.com/Debbie-alt/auto-translate"
              target="_blank"
              rel="noreferrer"
              aria-label="Translatekit on GitHub"
              className="hidden text-subtle transition-colors hover:text-ink sm:block"
            >
            <GithubIcon />
          </a>

          <a
            href="#docs"
            className="hidden items-center gap-2 rounded-lg border border-line bg-raise px-3.5 py-1.5 font-mono text-[12px] text-soft transition-colors hover:border-line-strong hover:bg-panel hover:text-ink md:inline-flex"
          >
            <span className="text-accent">$</span> npm i @debbie-alt/translatekit
          </a>

          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-[#0c1513] transition-colors hover:bg-[#8fd0c3]"
          >
            Get Started
          </a>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-soft md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              {open ? (
                <path d="M4 4l10 10M14 4L4 14" strokeLinecap="round" />
              ) : (
                <path d="M2 5h14M2 9h14M2 13h9" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line/70 bg-canvas/70 backdrop-blur-xl md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1.5 px-5 py-7">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg border border-transparent px-3 py-3 text-[15px] text-soft transition-colors hover:border-line hover:bg-panel/60 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#docs"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg border border-line bg-raise/60 px-3 py-3 font-mono text-[13px] text-soft"
              >
                <span className="text-accent">$</span> npm i @debbie-alt/translatekit
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
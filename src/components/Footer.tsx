import { Wordmark } from "./Wordmark";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Documentation", href: "#docs" },
      { label: "Features", href: "#features" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "API reference", href: "#api" },
      { label: "React component", href: "#react" },
      { label: "Code examples", href: "#docs" },
    ],
  },
  {
    title: "Open source",
    links: [
      { label: "GitHub", href: "https://github.com/Debbie-alt/auto-translate" },
      { label: "npm", href: "https://www.npmjs.com/package/@debbie-alt/translatekit" },
      { label: "MIT License", href: "#top" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-xs">
            <Wordmark />
            <p className="mt-4 text-sm leading-relaxed text-soft">
              Effortless, typed, runtime translation for developers. Built with
              restraint.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-medium uppercase tracking-wider text-faint">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-soft transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-[13px] text-faint">
            © 2026 Translatekit. MIT Licensed.
          </p>
          <p className="font-mono text-[12px] text-faint">
            <span className="text-accent">es</span>
            {"\u00A0·\u00A0"}
            <span className="text-blue">fr</span>
            {"\u00A0·\u00A0"}
            <span className="text-lavender">ja</span>
            {"\u00A0·\u00A0"}
            <span className="text-accent-dim">ar</span>
            {"\u00A0·\u00A0"}
            <span className="text-subtle">+7 more</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
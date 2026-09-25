import { useState } from "react";
import { Reveal } from "./Reveal";
import { CodeWindow } from "./CodeWindow";
import { SectionHeading } from "./SectionHeading";

const TABS = [
  {
    id: "translate",
    label: "translate()",
    filename: "routes/checkout.ts",
    badge: "ts",
    code: `import { configure, translate } from "@debbie-alt/translatekit";

configure({
  provider: "deepl",
  apiKey: process.env.DEEPL_API_KEY,
});

const checkout = (lang: string) => {
  const total = "$9.99";
  return translate({
    text: \`Your total is \${total} before tax\`,
    targetLanguage: lang,
  });
};

const summary = await checkout("es");
// "Su total es $9.99 antes de impuestos"`,
  },
  {
    id: "component",
    label: "<Autotranslate />",
    filename: "pages/settings.tsx",
    badge: "tsx",
    code: `import { Autotranslate } from "@debbie-alt/translatekit";

export function Settings({ locale }) {
  const rows = ["Notifications disabled", "Dark mode on", "Weekly digest"];

  return rows.map((row) => (
    <div key={row}>
      <Autotranslate targetLanguage={locale}>
        {row}
      </Autotranslate>
    </div>
  ));
}

// <Autotranslate targetLanguage="de">
//   Benachrichtigungen deaktiviert`,
  },
  ];

export function CodeExample() {
  const [active, setActive] = useState(TABS[0].id);
  const tab = TABS.find((t) => t.id === active) ?? TABS[0];

  return (
    <section id="docs" className="relative border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Real examples"
          title={
            <>
              Readable by humans,{" "}
              <span className="font-serif italic font-normal text-lavender">
                typed
              </span>{" "}
              for machines.
            </>
          }
          description="Two surfaces, one mental model. Pick the one that fits the language you are writing in."
        />

        <Reveal className="mt-14" delay={0.1}>
          <div className="mb-4 flex flex-wrap gap-1 rounded-xl border border-line bg-raise p-1">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(t.id)}
                className={`flex-1 rounded-lg px-3 py-2 text-left font-mono text-[12.5px] transition-colors sm:flex-none sm:px-4 ${
                  active === t.id
                    ? "bg-panel-2 text-ink ring-1 ring-line-strong"
                    : "text-faint hover:text-soft"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <CodeWindow
            key={tab.id}
            filename={tab.filename}
            code={tab.code}
            label={tab.badge}
            className="transition-opacity duration-300"
          />
        </Reveal>
      </div>
    </section>
  );
}
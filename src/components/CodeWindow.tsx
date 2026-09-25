import type { ReactNode } from "react";
import { Highlight } from "../lib/highlight.tsx";

type CodeWindowProps = {
  filename: string;
  code: string;
  label?: string;
  showNumbers?: boolean;
  className?: string;
  headerRight?: ReactNode;
};

function WindowChrome({ filename, label, headerRight }: CodeWindowProps) {
  return (
    <div className="flex items-center gap-3 border-b border-line bg-raise px-4 py-3">
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-panel-2 ring-1 ring-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-panel-2 ring-1 ring-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-panel-2 ring-1 ring-line-strong" />
      </div>
      <span className="font-mono text-xs text-faint">{filename}</span>
      <div className="ml-auto flex items-center gap-3">
        {headerRight}
        {label ? (
          <span className="rounded border border-line bg-panel px-2 py-0.5 font-mono text-[11px] text-subtle">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export function CodeWindow({
  filename,
  code,
  label,
  showNumbers = true,
  className = "",
  headerRight,
}: CodeWindowProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-code-bg shadow-[0_24px_60px_-28px_rgba(0,0,0,0.75)] ${className}`}
    >
      <WindowChrome
        filename={filename}
        code={code}
        label={label}
        headerRight={headerRight}
      />
      <div className="scrollbar-thin overflow-x-auto">
        <pre className="px-5 py-4 font-mono text-[12.5px] leading-[1.75] tab-size-4">
          {showNumbers ? (
            <code className="grid">
              {code.split("\n").map((line, i) => (
                <span key={i} className="grid grid-cols-[2.4rem_1fr]">
                  <span
                    className="select-none pr-4 text-right text-faint/60"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="whitespace-pre">
                    {line.trim() === "" ? "\u00A0" : <Highlight code={line} />}
                  </span>
                </span>
              ))}
            </code>
          ) : (
            <code className="whitespace-pre">
              <Highlight code={code} />
            </code>
          )}
        </pre>
      </div>
    </div>
  );
}
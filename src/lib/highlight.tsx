import type { ReactNode } from "react";
import { tokenize, type TokenClass } from "./highlight";

const CLASS_MAP: Record<TokenClass, string> = {
  kw: "text-kw",
  str: "text-str",
  cmt: "text-cmt",
  fn: "text-fn",
  type: "text-blue",
  num: "text-soft",
  plain: "text-ink",
  punct: "text-faint",
};

export function Highlight({ code }: { code: string }): ReactNode {
  const tokens = tokenize(code);
  return tokens.map((token, i) => (
    <span key={i} className={CLASS_MAP[token.cls]}>
      {token.text}
    </span>
  ));
}
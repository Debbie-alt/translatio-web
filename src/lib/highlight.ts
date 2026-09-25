export type TokenClass =
  | "kw"
  | "str"
  | "cmt"
  | "fn"
  | "type"
  | "num"
  | "plain"
  | "punct";

export type Token = { cls: TokenClass; text: string };

const KEYWORDS = new Set([
  "async",
  "await",
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "default",
  "do",
  "else",
  "export",
  "extends",
  "finally",
  "for",
  "from",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "interface",
  "let",
  "new",
  "of",
  "return",
  "static",
  "switch",
  "throw",
  "try",
  "type",
  "typeof",
  "var",
  "void",
  "while",
  "yield",
]);

const BUILTINS = new Set([
  "console",
  "JSON",
  "Math",
  "Error",
  "Promise",
  "process",
  "fetch",
  "String",
  "Number",
  "Boolean",
  "Object",
  "Array",
  "RegExp",
]);

const TOKEN_RE =
  /\s+|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\/\/[^\n]*|\/\*[\s\S]*?\*\/|@[A-Za-z_][\w]*|\b[A-Za-z_$][\w$]*\b|\b[\d][\d._]*\b|./gy;

function classify(code: string, token: string, index: number): TokenClass {
  if (token.startsWith('"') || token.startsWith("'") || token.startsWith("`")) {
    return "str";
  }
  if (token.startsWith("//") || token.startsWith("/*") || token.startsWith("///")) {
    return "cmt";
  }
  if (/^[\d]/.test(token)) {
    return "num";
  }
  if (/^@/.test(token)) {
    return "fn";
  }
  if (/^[A-Za-z_$]/.test(token)) {
    if (KEYWORDS.has(token)) return "kw";
    if (BUILTINS.has(token)) return "fn";
    if (/^[A-Z]/.test(token)) return "type";

    const rest = code.slice(index + token.length);
    const lead = rest.search(/\S/);
    const ahead = lead === -1 ? "" : rest.slice(lead);
    if (ahead.startsWith("(")) return "fn";
    return "plain";
  }
  return "punct";
}

export function tokenize(code: string): Token[] {
  const tokens: Token[] = [];
  TOKEN_RE.lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = TOKEN_RE.exec(code)) !== null) {
    const text = match[0];
    if (/^\s+$/.test(text)) continue;
    tokens.push({
      cls: classify(code, text, match.index),
      text,
    });
  }
  return tokens;
}
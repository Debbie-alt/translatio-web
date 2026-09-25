export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Translatekit home"
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 32 32"
        fill="none"
        className="shrink-0"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="7" fill="var(--color-panel)" />
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="6.5"
          stroke="var(--color-line)"
        />
        <path
          d="M8 9h16M8 23h16M14 9v14M18 9v14"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="24.5" cy="23.5" r="2" fill="var(--color-lavender)" />
      </svg>
      <span className="text-[17px] font-medium tracking-[-0.01em] text-ink">
        Translatekit
      </span>
    </a>
  );
}
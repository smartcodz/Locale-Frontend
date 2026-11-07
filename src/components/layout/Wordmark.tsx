// src/components/layout/Wordmark.tsx
import { Link } from "react-router";

export default function Wordmark() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-ink"
    >
      {/* A ring with a dot inside: "you are here". Decorative, so hidden from screen readers. */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="11"
          cy="11"
          r="9"
          stroke="var(--color-brand)"
          strokeWidth="2.5"
        />
        <circle cx="11" cy="11" r="3.5" fill="var(--color-brand)" />
      </svg>
      Locale
    </Link>
  );
}

import { NavLink, Outlet, ScrollRestoration } from "react-router";
import Container from "./Container";
import Wordmark from "./Wordmark";

// NavLink calls this function with { isActive } and uses the string we return as the class.
function navLinkClass({ isActive }: { isActive: boolean }): string {
  const base = "border-b-2 py-1 text-base transition-colors";
  return isActive
    ? `${base} border-brand font-medium text-ink`
    : `${base} border-transparent text-muted hover:text-ink`;
}

export default function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-brand focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <header className="border-b border-line">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Wordmark />
            <nav aria-label="Main" className="flex gap-6">
              {/* "end" makes Home active only on exactly "/", not on every page. */}
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/search" className={navLinkClass}>
                Search
              </NavLink>
            </nav>
          </div>
        </Container>
      </header>

      <main id="main" tabIndex={-1} className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-line bg-mist">
        <Container>
          <p className="py-8 text-sm text-muted">
            Locale is a neighbourhood guide for Benin City.
          </p>
        </Container>
      </footer>

      <ScrollRestoration />
    </div>
  );
}

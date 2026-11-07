import { Link, NavLink, Outlet } from "react-router";

// A small helper that returns the right classes for a nav link.
// Parameter type: an object with one boolean field, written inline.
// This is a type annotation, not an interface (our rule: use type aliases).
function navClass({ isActive }: { isActive: boolean }): string {
  const base = "text-sm font-medium px-1 pb-1 border-b-2 transition-colors";
  return isActive
    ? `${base} border-teal-600 text-teal-700`
    : `${base} border-transparent text-slate-600 hover:text-slate-900`;
}

export default function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="text-xl font-semibold text-teal-700">
            Locale
          </Link>

          <nav aria-label="Main" className="flex gap-6">
            {/* "end" means: only active at exactly "/", not on every page that starts with "/" */}
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>
            <NavLink to="/search" className={navClass}>
              Search
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200">
        <p className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-500">
          Know your neighbourhood, not just your destination.
        </p>
      </footer>
    </div>
  );
}

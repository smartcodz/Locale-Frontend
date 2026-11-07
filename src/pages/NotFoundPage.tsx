import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 text-center">
      <h1 className="text-3xl font-semibold text-slate-900">Page not found</h1>
      <p className="mt-2 text-slate-600">
        We could not find the page you were looking for.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-md bg-teal-600 px-4 py-2 text-white hover:bg-teal-700"
      >
        Back to home
      </Link>
    </div>
  );
}

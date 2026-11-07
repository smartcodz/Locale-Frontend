import { Link } from "react-router";
import Container from "../components/layout/Container";

export default function NotFoundPage() {
  return (
    <Container>
      <title>Page not found - Locale</title>
      <div className="py-16 sm:py-24">
        <h1 className="text-3xl font-bold tracking-tight">
          This page does not exist
        </h1>
        <p className="mt-3 max-w-xl text-muted">
          The address may be mistyped, or the page may have been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block font-medium text-brand underline underline-offset-4 hover:text-brand-deep"
        >
          Go to the home page
        </Link>
      </div>
    </Container>
  );
}

// src/pages/HomePage.tsx
import { Link } from "react-router";
import Container from "../components/layout/Container";

export default function HomePage() {
  return (
    <Container>
      <title>Locale</title>
      <section className="py-16 sm:py-28">
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
          Know your neighbourhood, not just your destination.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Find restaurants, pharmacies, schools and more around you in Benin
          City, and learn what each area is like before you go.
        </p>
        <Link
          to="/search"
          className="mt-10 inline-block rounded-md bg-brand px-6 py-3 font-medium text-white transition-colors hover:bg-brand-deep"
        >
          Browse businesses
        </Link>
      </section>
    </Container>
  );
}

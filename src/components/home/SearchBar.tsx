// src/pages/SearchPage.tsx
import Container from "../layout/Container";

export default function SearchPage() {
  return (
    <Container>
      <title>Search - Locale</title>
      <div className="py-12">
        <h1 className="text-3xl font-bold tracking-tight">Search</h1>
        <p className="mt-3 max-w-xl text-muted">
          Businesses will be listed here.
        </p>
      </div>
    </Container>
  );
}

// src/pages/SearchPage.tsx
import { Link, useSearchParams } from "react-router";
import BusinessRow from "../components/business/BusinessRow";
import CategoryFilter from "../components/business/CategoryFilter";
import SearchForm from "../components/business/SearchForm";
import Container from "../components/layout/Container";
import { useBusinesses } from "../hooks/useBusinesses";
import { parseBusinessSearch } from "../schemas/business.schema";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const search = parseBusinessSearch(searchParams);
  const { data, isPending, isError, refetch, isPlaceholderData } =
    useBusinesses(search);

  return (
    <Container>
      <title>Search - Locale</title>
      <div className="space-y-6 py-10">
        <h1 className="text-3xl font-bold tracking-tight">Search</h1>
        <SearchForm search={search} />
        <CategoryFilter search={search} />

        {/* aria-live: screen readers announce the new count when filters change */}
        <div aria-live="polite">
          {isPending && (
            <ul role="status" aria-label="Loading businesses">
              {[0, 1, 2].map((n) => (
                <li
                  key={n}
                  className="space-y-2 border-b border-line py-5 motion-safe:animate-pulse"
                >
                  <div className="h-5 w-1/3 rounded bg-mist" />
                  <div className="h-4 w-1/4 rounded bg-mist" />
                </li>
              ))}
            </ul>
          )}

          {isError && (
            <div className="py-8">
              <p className="font-medium">Businesses could not be loaded.</p>
              <p className="mt-1 text-muted">
                Check your connection, then try again.
              </p>
              <button
                type="button"
                onClick={() => void refetch()}
                className="mt-4 font-medium text-brand underline underline-offset-4 hover:text-brand-deep"
              >
                Try again
              </button>
            </div>
          )}

          {data && data.length === 0 && (
            <div className="py-8">
              <p className="font-medium">No businesses match your search.</p>
              <Link
                to="/search"
                className="mt-3 inline-block font-medium text-brand underline underline-offset-4 hover:text-brand-deep"
              >
                Clear filters
              </Link>
            </div>
          )}

          {data && data.length > 0 && (
            <>
              <p className="text-sm text-muted">
                {data.length} {data.length === 1 ? "business" : "businesses"}
              </p>
              <ul
                className={
                  isPlaceholderData
                    ? "opacity-60 transition-opacity"
                    : undefined
                }
              >
                {data.map((business) => (
                  <BusinessRow key={business.id} business={business} />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </Container>
  );
}

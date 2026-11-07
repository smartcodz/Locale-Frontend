import SearchBar from "../components/home/SearchBar";
import CategoryChips from "../components/home/CategoryChips";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
        What is around you in Benin City?
      </h1>
      <p className="mt-3 text-slate-600">
        Find restaurants, pharmacies, schools and more, neighbourhood by
        neighbourhood.
      </p>

      <div className="mt-8">
        <SearchBar />
      </div>

      <section className="mt-10" aria-labelledby="browse-heading">
        <h2
          id="browse-heading"
          className="mb-4 text-lg font-medium text-slate-900"
        >
          Browse by category
        </h2>
        <CategoryChips />
      </section>
    </div>
  );
}

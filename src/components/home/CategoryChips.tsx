import { Link } from "react-router";
import { useCategories } from "../../hooks/useCategories";

export default function CategoryChips() {
  const { data, isPending, isError, refetch } = useCategories();

  if (isPending) {
    return (
      <p role="status" className="text-sm text-slate-500">
        Loading categories...
      </p>
    );
  }

  if (isError) {
    return (
      <div role="alert" className="text-sm text-slate-700">
        <p>We could not load the categories right now.</p>
        <button
          type="button"
          onClick={() => void refetch()}
          className="mt-2 rounded-md border border-slate-300 px-3 py-1 hover:border-teal-600 hover:text-teal-700"
        >
          Try again
        </button>
      </div>
    );
  }

  // Past this point TypeScript knows data is Category[] (not undefined).
  if (data.length === 0) {
    return <p className="text-sm text-slate-500">No categories yet.</p>;
  }

  return (
    <ul className="flex flex-wrap gap-3" aria-label="Browse by category">
      {data.map((category) => {
        // URLSearchParams encodes the value safely.
        const params = new URLSearchParams({ category: category.slug });
        return (
          <li key={category.id}>
            <Link
              to={`/search?${params.toString()}`}
              className="inline-block rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:border-teal-600 hover:text-teal-700"
            >
              {category.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

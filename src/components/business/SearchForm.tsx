import { useNavigate } from "react-router";
import { searchPath } from "../../lib/searchPath";
import type { BusinessSearch } from "../../schemas/business.schema";

type SearchFormProps = { search: BusinessSearch };

export default function SearchForm({ search }: SearchFormProps) {
  const navigate = useNavigate();

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault(); // stop the browser's full-page form submit
    const value = new FormData(event.currentTarget).get("q"); // string | File | null
    const q = typeof value === "string" ? value.trim() : "";
    navigate(searchPath({ ...search, q: q || undefined }));
  }

  return (
    <form onSubmit={handleSubmit} role="search" className="flex gap-3">
      <label htmlFor="q" className="sr-only">
        Search by name, area or street
      </label>
      {/* key resets the input when the address changes (Back button, Clear filters) */}
      <input
        key={search.q ?? ""}
        id="q"
        name="q"
        type="search"
        defaultValue={search.q ?? ""}
        placeholder="Name, area or street"
        maxLength={100}
        className="w-full rounded-md border border-line px-4 py-3 placeholder:text-muted"
      />
      <button
        type="submit"
        className="rounded-md bg-brand px-6 py-3 font-medium text-white transition-colors hover:bg-brand-deep"
      >
        Search
      </button>
    </form>
  );
}

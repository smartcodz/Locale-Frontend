import { Link } from "react-router";
import { useCategories } from "../../hooks/useCategories";
import { searchPath } from "../../lib/searchPath";
import type { BusinessSearch } from "../../schemas/business.schema";

type CategoryFilterProps = { search: BusinessSearch };

const chipBase = "rounded-full border px-4 py-1.5 text-sm transition-colors";

function chipClass(active: boolean): string {
  return active
    ? `${chipBase} border-brand bg-brand text-white`
    : `${chipBase} border-line text-ink hover:border-brand`;
}

export default function CategoryFilter({ search }: CategoryFilterProps) {
  const { data: categories, isError } = useCategories();

  if (isError) {
    return (
      <p className="text-sm text-muted">Categories could not be loaded.</p>
    );
  }

  return (
    <nav aria-label="Filter by category">
      <ul className="flex flex-wrap gap-2">
        <li>
          {/* Changing the category keeps the text search; "All" removes only the category. */}
          <Link
            to={searchPath({ ...search, category: undefined })}
            className={chipClass(!search.category)}
            aria-current={!search.category ? "true" : undefined}
          >
            All
          </Link>
        </li>
        {categories?.map((category) => {
          const active = search.category === category.slug;
          return (
            <li key={category.id}>
              <Link
                to={searchPath({ ...search, category: category.slug })}
                className={chipClass(active)}
                aria-current={active ? "true" : undefined}
              >
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

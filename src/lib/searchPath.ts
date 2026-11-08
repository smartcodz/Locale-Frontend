import type { BusinessSearch } from "../schemas/business.schema";

// Builds "/search?category=...&q=..." from a search object. URLSearchParams encodes special characters.
export function searchPath(search: BusinessSearch): string {
  const params = new URLSearchParams();
  if (search.category) params.set("category", search.category);
  if (search.q) params.set("q", search.q);
  const query = params.toString();
  return query ? `/search?${query}` : "/search";
}

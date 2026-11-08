import {
  businessesResponseSchema,
  type Business,
  type BusinessSearch,
} from "../schemas/business.schema";
import { apiGet } from "./client";

// TEMPORARY: a static file. The real call will be '/api/businesses?category=...&q=...'.
const BUSINESSES_URL = "/mock/businesses.json";

export async function getBusinesses(
  search: BusinessSearch,
  signal?: AbortSignal,
): Promise<Business[]> {
  const { data } = await apiGet(
    BUSINESSES_URL,
    businessesResponseSchema,
    signal,
  );

  // TEMPORARY: the backend will do this filtering in SQL. Delete this block then.
  const q = search.q?.toLowerCase();
  return data.filter((b) => {
    const matchesCategory =
      !search.category || b.category.slug === search.category;
    const matchesText =
      !q ||
      [b.name, b.area, b.address].some((text) =>
        text.toLowerCase().includes(q),
      );
    return matchesCategory && matchesText;
  });
}

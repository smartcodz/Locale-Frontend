import {
  categoriesResponseSchema,
  type Category,
} from "../schemas/category.schema";

// TEMPORARY: a static file. When the backend has the endpoint,
// change this to '/api/categories' (served through the Vite dev proxy).
const CATEGORIES_URL = "/mock/categories.json";

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(CATEGORIES_URL);

  // fetch does NOT throw on 404/500, so we do it ourselves.
  if (!response.ok) {
    throw new Error(`Could not load categories (status ${response.status})`);
  }

  // Declare the body as unknown: we do not trust it yet.
  const body: unknown = await response.json();

  // parse() returns a fully typed value, or throws a ZodError.
  const parsed = categoriesResponseSchema.parse(body);
  return parsed.data;
}

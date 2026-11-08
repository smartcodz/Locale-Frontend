// src/api/category.api.ts
import {
  categoriesResponseSchema,
  type Category,
} from "../schemas/category.schema";
import { apiGet } from "./client";

// TEMPORARY: a static file. When the backend exists, change this to '/api/categories'.
const CATEGORIES_URL = "/mock/categories.json";

export async function getCategories(signal?: AbortSignal): Promise<Category[]> {
  const { data } = await apiGet(
    CATEGORIES_URL,
    categoriesResponseSchema,
    signal,
  );
  return data;
}

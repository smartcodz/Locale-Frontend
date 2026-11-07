import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/category.api";

// Exported so later code (for example cache invalidation after an admin edit)
// can refer to the same key without retyping it.
export const categoriesQueryKey = ["categories"] as const;

export function useCategories() {
  return useQuery({
    queryKey: categoriesQueryKey,
    queryFn: getCategories,
    staleTime: 5 * 60 * 1000, // 5 minutes: categories rarely change
  });
}

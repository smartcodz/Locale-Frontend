import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/category.api";

export const categoriesQueryKey = ["categories"] as const;

export function useCategories() {
  return useQuery({
    queryKey: categoriesQueryKey,
    queryFn: ({ signal }) => getCategories(signal),
    staleTime: 5 * 60 * 1000, // 5 minutes: categories rarely change
  });
}

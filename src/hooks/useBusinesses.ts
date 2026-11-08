import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getBusinesses } from "../api/business.api";
import type { BusinessSearch } from "../schemas/business.schema";

export function useBusinesses(search: BusinessSearch) {
  return useQuery({
    // The key includes the search, so each different search is cached separately.
    queryKey: ["businesses", search] as const,
    queryFn: ({ signal }) => getBusinesses(search, signal),
    placeholderData: keepPreviousData, // keep the old list on screen while the new one loads
  });
}

import { QueryClient } from "@tanstack/react-query";

// One client for the whole app. It owns the cache.
export const queryClient = new QueryClient();

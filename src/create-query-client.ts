import { QueryClient } from "@tanstack/react-query";

export function createQueryClient() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: false,
      },
    },
  });

  return queryClient;
}

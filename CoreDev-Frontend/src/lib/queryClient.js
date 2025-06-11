import { QueryClient } from "@tanstack/react-query";

const queryClientConfig = {
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, 
            cacheTime: 1000 * 60, 
            refetchInterval: 1000 * 60,
            refetchIntervalInBackground: false,
        },
    },
};

export const queryClient = new QueryClient(queryClientConfig);

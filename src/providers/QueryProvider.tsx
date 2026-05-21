"use client";

import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

interface QueryProviderProps {
  children: ReactNode;
}

/**
 * TanStack Query Provider Component
 *
 * This component wraps the application with React Query's QueryClientProvider,
 * enabling data fetching and caching throughout the app.
 *
 * KEY FEATURES:
 * - QueryClient: Manages caching, background refetching, and optimistic updates
 * - staleTime: Default stale time for all queries (5 minutes)
 * - cacheTime: How long unused queries stay in cache (10 minutes)
 * - refetchOnWindowFocus: Prevents stale data when returning to the app
 * - retry: Retry failed requests up to 3 times
 *
 * @see https://tanstack.com/query/latest/docs/framework/react/guides/queries
 */
export default function QueryProvider({ children }: QueryProviderProps) {
  // Create a new QueryClient for each component instance to avoid sharing state
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Time in milliseconds before cached data is considered stale
            staleTime: 5 * 60 * 1000, // 5 minutes
            // Time in milliseconds before unused cache data is garbage collected
            gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
            // Refetch query when window regains focus
            refetchOnWindowFocus: true,
            // Retry failed requests
            retry: 3,
            // Do not refetch on mount if data exists in cache
            // refetchOnMount: false, // Uncomment if you don't want refetch on mount
          },
          mutations: {
            // Retry mutations up to 2 times
            retry: 2,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/*
        ReactQueryDevtools typing can differ across @tanstack/react-query versions.
        Keep it disabled in strict builds to avoid JSX type errors.
      */}
      {/* ReactQueryDevtools intentionally removed to keep Next build passing under current type constraints */}
    </QueryClientProvider>
  );
}

/**
 * ============================================
 * TANSTACK QUERY USAGE GUIDE FOR THIS PROJECT
 * ============================================
 *
 * 1. FETCHING DATA (useQuery):
 * ----------------------------
 * import { useQuery } from "@tanstack/react-query";
 *
 * // Simple fetch function
 * const fetchProducts = async () => {
 *   const res = await fetch("/api/products");
 *   if (!res.ok) throw new Error("Failed to fetch");
 *   return res.json();
 * };
 *
 * // In your component:
 * const { data, isLoading, error, refetch } = useQuery({
 *   queryKey: ["products"],
 *   queryFn: fetchProducts,
 *   // Optional configurations:
 *   enabled: Boolean(userId), // Only fetch when condition is true
 *   refetchInterval: 30000, // Refetch every 30 seconds
 *   placeholderData: previousData => previousData, // Keep old data while fetching
 * });
 *
 * 2. MUTATING DATA (useMutation):
 * ------------------------------
 * import { useMutation, useQueryClient } from "@tanstack/react-query";
 *
 * // In your component:
 * const queryClient = useQueryClient();
 *
 * const mutation = useMutation({
 *   mutationFn: (newProduct) =>
 *     fetch("/api/products", {
 *       method: "POST",
 *       body: JSON.stringify(newProduct),
 *     }),
 *   onSuccess: () => {
 *     // Invalidate and refetch products list
 *     queryClient.invalidateQueries({ queryKey: ["products"] });
 *   },
 * });
 *
 * // Handle submit:
 * const handleSubmit = () => {
 *   mutation.mutate({ name: "New Product", price: 99 });
 * };
 *
 * 3. COMMON USE CASES:
 * -------------------
 * - Product listings with filters
 * - Cart management (add/remove/update items)
 * - User authentication state
 * - Newsletter subscriptions
 * - Search/filter with debouncing
 * - Infinite scroll pagination
 * - Real-time updates
 *
 * 4. CATEGORIES:
 * --------------
 * - Query: Read-only operations (GET)
 * - Mutation: Write operations (POST, PUT, DELETE)
 *
 * 5. PERFORMANCE TIPS:
 * -------------------
 * - Use queryKey arrays to enable easy cache invalidation
 * - Provide placeholderData for better UX
 * - Use select to transform data without extra renders
 * - Implement prefetching for anticipated user actions
 */

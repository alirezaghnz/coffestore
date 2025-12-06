import { useQuery } from "@tanstack/react-query";

export function useCoffees() {
  return useQuery({
    queryKey: ["coffees"],
    queryFn: () => fetch("/api/coffees").then((res) => res.json()),
    staleTime: 10000,
    gcTime: 5 * 60000,
  });
}

import { useQuery } from "@tanstack/react-query";

import { fetchMovie } from "../api/movies.api";

export function useMovie(uuid: string | null) {
  return useQuery({
    queryKey: ["movie", uuid],
    queryFn: () => fetchMovie(uuid),
    enabled: !!uuid,
  });
}
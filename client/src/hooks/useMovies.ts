import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../api/movies.api";

export function useMovies(page: number, limit: number = 8) {
  return useQuery({
    queryKey: ["movies", page, limit],
    queryFn: () => fetchMovies(page, limit),
  });
}
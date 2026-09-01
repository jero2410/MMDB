import type { MoviesResponse } from "../types/moviesResponse.type";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export async function fetchMovies(page: number, limit: number = 8) {
  const response = await fetch(
    `${BASE_URL}/movies?page=${page}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json() as Promise<MoviesResponse>;
}
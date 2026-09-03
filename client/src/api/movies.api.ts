import type { MovieDetilsResponse } from "../types/movieDetailsResponse";
import type { MoviesListResponse } from "../types/moviesListResponse.type";

const BASE_URL = import.meta.env.VITE_BASE_URL || "";

export async function fetchMovies(page: number, limit: number = 8) {
  const response = await fetch(
    `${BASE_URL}/movies?page=${page}&limit=${limit}`,
  );

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json() as Promise<MoviesListResponse>;
}

export async function fetchMovie(uuid: string | null) {
  const response = await fetch(`${BASE_URL}/movies/${uuid}`);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json() as Promise<MovieDetilsResponse>;
}

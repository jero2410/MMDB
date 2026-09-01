import type { Movie } from "./movie.type";

export type MoviesResponse = {
  movies: Movie[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};
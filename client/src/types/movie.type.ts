export type Movie = {
  id: number;
  title: string;
  poster_url: string ;
  release_year: number | null;
  runtime_minutes: number | null;
  overview: string | null;
};
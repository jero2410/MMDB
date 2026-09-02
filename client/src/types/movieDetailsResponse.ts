export type User = {
  id: number;
  display_name: string;
}

export type Review = {
  id: number;
  rating: number;
  title: string;
  body: string;
  created_at: string;
  user: User;
}

export type Person = {
  id: number;
  name: string;
  photo_url?: string;
}

export type Genre = {
  id: number;
  name: string;
}

export type MovieCrew = {
  job: string;
  person: Person;
}

export type MovieCast = {
  character_name: string;
  person: Person;
}

export type MovieGenres = {
  movie_id: number,
  genre_id: number,
  genre: Genre
}

export type MovieDetilsResponse = {
  uuid: string;
  title: string;
  release_year: number;
  runtime_minutes: number;
  overview: string;
  poster_url: string;
  trailer_url: string;
  language: string;
  average_rating:  number;
  reviews: Review[];
  movieCrew: MovieCrew[];
  movieCast: MovieCast[];
  movieGenres: MovieGenres[]
}
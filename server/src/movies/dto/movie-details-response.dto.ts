import { MovieCastResponseDto } from './movie-cast-response.dto';
import { MovieCrewResponseDto } from './movie-crew-response.dto';
import { MovieGenreResponseDto } from './movie-genre-response.dto';
import { MovieReviewResponseDto } from './movie-review-response.dto';

export class MovieDetailsResponseDto {
  uuid: string;
  title: string;
  overview: string;
  poster_url: string;
  trailer_url: string;
  release_year: number;
  runtime_minutes: number;
  language: string;
  movieCast: MovieCastResponseDto[];
  movieCrew: MovieCrewResponseDto[];
  movieGenres: MovieGenreResponseDto[];
  reviews: MovieReviewResponseDto[];
}

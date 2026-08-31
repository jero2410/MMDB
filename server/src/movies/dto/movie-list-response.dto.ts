import { MovieCardDto } from './movie-card.dto';
import { MoviePaginationResponseDto } from './movie-pagination.dto';

export class MovieListResponseDto {
  movies: MovieCardDto[];
  pagination: MoviePaginationResponseDto;
}

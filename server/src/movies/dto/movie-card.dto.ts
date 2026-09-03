import { Expose } from 'class-transformer';

export class MovieCardDto {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  poster_url: string;

  @Expose()
  release_year: number;

  @Expose()
  average_rating: number;
}

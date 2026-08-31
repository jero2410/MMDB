import { Expose } from 'class-transformer';

export class MovieCardDto {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose({ name: 'poster_url' })
  posterUrl: string;

  @Expose({ name: 'release_year' })
  releaseYear: number;

  @Expose({ name: 'average_rating' })
  averageRating: number;
}

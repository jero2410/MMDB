import { Expose } from 'class-transformer';

export class MovieListDto {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  poster_url: string;

  @Expose()
  release_year: number;
}

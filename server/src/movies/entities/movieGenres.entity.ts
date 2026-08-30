import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { Movie } from './movies.entity';
import { Genre } from '../../genres/entities/genres.entity';

@Entity('movie_genres')
export class MovieGenres {
  @PrimaryColumn({ type: 'int' })
  movie_id: number;

  @PrimaryColumn({ type: 'int' })
  genre_id: number;

  @ManyToOne(() => Movie, (movie) => movie.movieGenres, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @ManyToOne(() => Genre, (genre) => genre.movieGenres, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'genre_id' })
  genre: Genre;
}

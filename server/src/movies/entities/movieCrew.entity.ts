import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { Movie } from './movies.entity';
import { People } from '../../people/entities/people.entity';

@Entity('movie_crew')
export class MovieCrew {
  @PrimaryColumn({ type: 'int' })
  movie_id: number;

  @PrimaryColumn({ type: 'int' })
  person_id: number;

  @PrimaryColumn({ type: 'text' })
  job: string;

  @ManyToOne(() => Movie, (movie) => movie.movieCrew, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @ManyToOne(() => People, (person) => person.movieCrew, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'person_id' })
  person: People;
}

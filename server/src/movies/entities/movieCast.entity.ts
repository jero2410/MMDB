import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm';

import { Movie } from './movies.entity';
import { People } from '../../people/entities/people.entity';

@Entity('movie_cast')
export class MovieCast {
  @PrimaryColumn({ type: 'int' })
  movie_id: number;

  @PrimaryColumn({ type: 'int' })
  person_id: number;

  @PrimaryColumn({ type: 'text' })
  character_name: string;

  @Column({ type: 'int', nullable: false })
  billing_order: number;

  @ManyToOne(() => Movie, (movie) => movie.movieCast, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @ManyToOne(() => People, (person) => person.movieCast, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'person_id' })
  person: People;
}

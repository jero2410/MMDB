import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MovieGenres } from '../../movies/entities/movieGenres.entity';

@Entity('genres')
export class Genre {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'text', nullable: false })
  name: string;

  @OneToMany(() => MovieGenres, (movieGenres) => movieGenres.genre)
  movieGenres: MovieGenres[];
}

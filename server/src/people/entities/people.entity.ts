import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MovieCast } from '../../movies/entities/movieCast.entity';
import { MovieCrew } from '../../movies/entities/movieCrew.entity';
@Entity('people')
export class People {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: true })
  photo_url: string;

  @Column({ type: 'text', nullable: true })
  biography: string;

  @Column({ type: 'text', nullable: false })
  gender: string;

  @Column({ type: 'date', nullable: true })
  birthdate: Date;

  @Column({ type: 'text', nullable: true })
  place_of_birth: string;

  @Column({ type: 'text', nullable: false })
  known_for: string;

  @OneToMany(() => MovieCrew, (movieCrew) => movieCrew.person)
  movieCrew: MovieCrew[];

  @OneToMany(() => MovieCast, (movieCast) => movieCast.person)
  movieCast: MovieCast[];
}

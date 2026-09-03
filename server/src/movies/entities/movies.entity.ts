import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn({ type: 'int' })
  public id: number;

  @Column({
    type: 'uuid',
    unique: true,
    generated: 'uuid',
  })
  uuid: string;

  @Column({ type: 'text', nullable: false })
  title: string;

  @Column({ name: 'release_year', type: 'int', nullable: false })
  release_year: number;

  @Column({ type: 'int', nullable: true })
  runtime_minutes: number;

  @Column({ type: 'text', nullable: true })
  overview: string;

  @Column({ type: 'text', nullable: false })
  poster_url: string;

  @Column({ type: 'text', nullable: true })
  trailer_url: string;

  @Column({ type: 'text', nullable: true })
  language: string;

  @Column({
    type: 'numeric',
    precision: 2,
    scale: 1,
    default: 0.0,
  })
  average_rating: number;
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  Check,
} from 'typeorm';

import { Movie } from '../../movies/entities/movies.entity';
import { User } from '../../users/entities/users.entity';

@Entity('reviews')
@Check(`"rating" >= 1 AND "rating" <= 10`)
export class Review {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'int', nullable: false })
  movie_id: number;

  @Column({ type: 'int', nullable: false })
  user_id: number;

  @Column({ type: 'int', nullable: true })
  rating: number;

  @Column({ type: 'text', nullable: true })
  title: string;

  @Column({ type: 'text', nullable: true })
  body: string;

  @CreateDateColumn({
    type: 'timestamptz',
    nullable: true,
  })
  created_at: Date;

  @ManyToOne(() => Movie, (movie) => movie.reviews, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @ManyToOne(() => User, (user) => user.reviews, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;
}

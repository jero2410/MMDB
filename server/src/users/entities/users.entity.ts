import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Review } from '../../reviews/entities/reviews.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ type: 'int' })
  public id: number;

  @Column({ type: 'text', nullable: false, unique: true })
  email: string;

  @Column({ type: 'text', nullable: false })
  display_name: string;

  @Column({ type: 'text', nullable: false, name: 'password_hash' })
  hashed_password: string;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];
}

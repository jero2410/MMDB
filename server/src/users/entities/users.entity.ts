import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ type: 'int' })
  public id: number;

  @Column({ type: 'text', nullable: false, unique: true })
  email: string;

  @Column({ type: 'text', nullable: false })
  display_name: string;

  @Column({ type: 'text', nullable: false })
  password_hash: string;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;
}

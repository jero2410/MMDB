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

  @Column({
    type: 'uuid',
    unique: true,
    generated: 'uuid',
  })
  uuid: string;

  @Column({ type: 'text', nullable: false, unique: true })
  email: string;

  @Column({ type: 'text', nullable: false })
  display_name: string;

  @Column({ type: 'text', nullable: false, name: 'password_hash' })
  hashed_password: string;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;
}

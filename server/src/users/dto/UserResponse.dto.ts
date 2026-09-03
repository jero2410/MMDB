import { Exclude, Expose } from 'class-transformer';
import { User } from '../entities/users.entity';

@Exclude()
export class UserResponseDto {
  id: number;
  @Expose()
  uuid: string;

  @Expose()
  email: string;

  @Expose()
  display_name: string;

  hashed_password: string;

  constructor(partial: Partial<User | null>) {
    Object.assign(this, partial);
  }
}

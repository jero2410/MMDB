import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { UserResponseDto } from './dto/UserResponse.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // Fetch a single user by UUID
  async findById(uuid: string): Promise<UserResponseDto> {
    const user = await this.usersRepository.findOne({
      where: { uuid },
    });
    if (!user) {
      throw new NotFoundException(`user with ID "${uuid}" not found`);
    }
    return new UserResponseDto(user);
  }

  // Fetch a single user by Email
  async findByEmail(email: string): Promise<UserResponseDto | null> {
    const user = await this.usersRepository.findOne({
      where: { email },
    });
    return new UserResponseDto(user);
  }

  // Create a new user database record
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { first_name, last_name, email, hashed_password } = createUserDto;

    // Instantiate and populate the entity fields
    const newUser = this.usersRepository.create({
      email,
      display_name: `${first_name} ${last_name}`.trim(),
      hashed_password,
    });

    // Save to the database
    return await this.usersRepository.save(newUser);
  }
}

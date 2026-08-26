import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signup(signupDto: SignupDto) {
    const { first_name, last_name, email, password } = signupDto;

    // Check if email already exists
    const existingUser = await this.usersService.findByEmail(email);

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, salt);

    // Create user
    const user = await this.usersService.create({
      first_name,
      last_name,
      email,
      hashed_password: hashed_password,
    });

    return {
      message: 'Signup successful',
      user: {
        id: user.id,
        name: user.display_name,
        email: user.email,
      },
    };
  }

  async login(loginDto: LoginDto) {
    const { email, input_password } = loginDto;
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new ConflictException('Invalid email or password');
    }

    const isMatch = await bcrypt.compare(input_password, user.hashed_password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid email or password');
    }
    return {
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.display_name,
        email: user.email,
      },
    };
  }
}

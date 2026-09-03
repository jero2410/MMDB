import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwtPayload.interface';
import { SignupResponse } from './dto/signupResponse.dto';
import { LoginResponse } from './dto/loginResponse.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(signupDto: SignupDto): Promise<SignupResponse> {
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
        uuid: user.uuid,
        name: user.display_name,
        email: user.email,
      },
    };
  }

  async login(loginDto: LoginDto): Promise<LoginResponse> {
    const { email, password } = loginDto;
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new ConflictException('Invalid email or password');
    }

    const isMatch = await bcrypt.compare(password, user.hashed_password);

    if (!isMatch) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      rememberMe: loginDto.rememberMe,
    };

    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: loginDto.rememberMe ? '30d' : '15m',
    });

    return {
      message: 'Login successful',
      access_token: accessToken,
      user: {
        uuid: user.uuid,
        name: user.display_name,
        email: user.email,
      },
    };
  }
}

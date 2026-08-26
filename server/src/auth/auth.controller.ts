import { Controller, Post, HttpCode, HttpStatus, Body } from '@nestjs/common';
// import { UsersService } from 'src/users/users.service';
// import { CreateUserDto } from '../users/dto/createUser.dto';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @HttpCode(HttpStatus.CREATED) // Returns 201 Created
  create(@Body() SignupDto: SignupDto) {
    return this.authService.signup(SignupDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK) // Sets default 201 status to 200 OK
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }
}

import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  HttpCode,
  HttpStatus,
  Body,
  Query,
} from '@nestjs/common';
import { User } from './entities/users.entity';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto//createUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.findById(id);
  }

  @Get()
  findByEmail(@Query('email') email: string): Promise<User | null> {
    return this.usersService.findByEmail(email);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED) // Returns 201 Created
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}

import {
  Controller,
  Get,
  Param,
  Post,
  HttpCode,
  HttpStatus,
  Body,
  Query,
  ParseUUIDPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto//createUser.dto';
import { UserResponseDto } from './dto/UserResponse.dto';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':uuid')
  findById(
    @Param('uuid', ParseUUIDPipe) uuid: string,
  ): Promise<UserResponseDto> {
    return this.usersService.findById(uuid);
  }

  @Get()
  findByEmail(@Query('email') email: string): Promise<UserResponseDto | null> {
    return this.usersService.findByEmail(email);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED) // Returns 201 Created
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}

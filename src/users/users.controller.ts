import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(Number(id));
  }

  @Post()
  createUser(
    @Body() user: { name: string; gender: string; isMarried: boolean },
  ) {
    return this.usersService.createUser(user);
  }
}

import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service'; // Importando o UserService corretamente
import { User } from './user.entity'; // Importando a entidade User corretamente


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() user: Partial<User>): Promise<User> {
    return this.usersService.create(user);
  }
}

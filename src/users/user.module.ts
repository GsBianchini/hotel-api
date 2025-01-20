import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity'; // Corrigido para importar a entidade User corretamente
import { UserService } from './user.service'; // Corrigido para importar o UserService
import { UsersController } from './user.controller'; // Corrigido para importar o UsersController corretamente

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Corrigido para importar a entidade User
  controllers: [UsersController],
  providers: [UserService], // Corrigido para usar UserService
})
export class UsersModule {}

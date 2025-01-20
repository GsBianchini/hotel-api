// src/reservations/reservations.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './reservation.entity';  // Importando a entidade Reservation
import { ReservationsService } from './reservations.service';  // Importando o serviço de reservas
import { ReservationsController } from './reservations.controller';  // Importando o controlador de reservas

@Module({
  imports: [TypeOrmModule.forFeature([Reservation])],  // Registrando a entidade Reservation
  controllers: [ReservationsController],
  providers: [ReservationsService],
})
export class ReservationsModule {}

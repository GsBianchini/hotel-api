// src/reservations/reservations.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReservationsService } from './reservations.service';  // Importando o serviço de reservas
import { Reservation } from './reservation.entity';  // Importando a entidade Reservation

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Get()
  findAll(): Promise<Reservation[]> {
    return this.reservationsService.findAll();
  }

  @Post()
  create(
    @Body('checkInDate') checkInDate: Date,
    @Body('checkOutDate') checkOutDate: Date,
    @Body('userId') userId: number,
    @Body('roomId') roomId: number,
  ): Promise<Reservation> {
    return this.reservationsService.create(checkInDate, checkOutDate, userId, roomId);
  }
}

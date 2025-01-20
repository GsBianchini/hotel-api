// src/reservations/reservations.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './reservation.entity';  // Importando a entidade Reservation
import { User } from '../users/user.entity';  // Importando a entidade User
import { Room } from '../rooms/room.entity';  // Importando a entidade Room

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,  // Repositório de reservas
  ) {}

  async findAll(): Promise<Reservation[]> {
    return this.reservationRepository.find({ relations: ['user', 'room'] });  // Carregar usuário e quarto relacionado
  }

  async create(
    checkInDate: Date,
    checkOutDate: Date,
    userId: number,
    roomId: number,
  ): Promise<Reservation> {
    const reservation = this.reservationRepository.create({
      checkInDate,
      checkOutDate,
      user: { id: userId },  // Associando o usuário à reserva
      room: { id: roomId },  // Associando o quarto à reserva
    });

    return this.reservationRepository.save(reservation);
  }
}

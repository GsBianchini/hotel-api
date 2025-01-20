// src/rooms/room.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reservation } from '../reservations/reservation.entity'; // Importando a entidade Reservation

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;  // Nome do quarto

  @Column()
  price: number;  // Preço por noite

  @Column()
  capacity: number;  // Capacidade de pessoas no quarto

  @OneToMany(() => Reservation, (reservation) => reservation.room)
  reservations: Reservation[];  // Relacionamento com as reservas
}

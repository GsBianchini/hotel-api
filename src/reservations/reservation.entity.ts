// src/reservations/reservation.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';  // Importando a entidade User
import { Room } from 'src/rooms/room.entity';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  checkInDate: Date;

  @Column()
  checkOutDate: Date;

  @ManyToOne(() => User, (user) => user.reservations)
  user: User;  // Relacionamento com o usuário

  @ManyToOne(() => Room, (room) => room.reservations)
  room: Room;  // Relacionamento com o quarto reservado
}

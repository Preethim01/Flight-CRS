
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Fare {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  flightNumber: string;

  @Column()
  origin: string;

  @Column()
  destination: string;

  @Column()
  date: string;

  @Column()
  adultFare: number;

  @Column()
  childFare: number;

  @Column()
  infantFare: number;

  @Column()
  tax: number;

  @Column()
  aircraft: string;
}

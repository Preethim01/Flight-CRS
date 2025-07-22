import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Airport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  airportCode: string;

  @Column()
  airportName: string;
}

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity()
export class Aircraft {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  aircraftName: string;

  @Column()
  aircraftImage: string;

  
}
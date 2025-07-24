import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Airport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  airportName: string;

  @Column({ length: 3 })
  airportCode: string;
}



import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pilot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pilotName: string;

  @Column()
  licenseNumber: string;

  @Column({ type: 'date' })
  licenseExpiry: Date;
}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CabinClass {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;
}

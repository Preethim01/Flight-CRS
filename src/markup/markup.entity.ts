
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Markup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  markupType: 'fixed' | 'percent';

  @Column()
  amount: number;
}

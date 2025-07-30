import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PriceDetail {
  @PrimaryGeneratedColumn()
  id: number;


  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  adultFare: number;

  @Column()
  childFare: number;

  @Column()
  infantFare: number;

  @Column()
  tax: number;
}

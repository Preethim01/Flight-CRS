import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Aircraft } from 'src/aircraft/aircraft.entity';

@Entity()
export class PriceDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  adultFare: number;

  @Column('decimal', { precision: 10, scale: 2 })
  childFare: number;

  @Column('decimal', { precision: 10, scale: 2 })
  infantFare: number;

  @Column('decimal', { precision: 10, scale: 2 })
  tax: number;

  @ManyToOne(() => Aircraft, (aircraft) => aircraft.priceDetails)
  aircraft: Aircraft;
}

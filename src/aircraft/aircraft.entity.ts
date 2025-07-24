import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PriceDetail } from 'src/price-detail/price-detail.entity';

@Entity()
export class Aircraft {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  aircraftName: string;

  @Column()
  aircraftImage: string;

  @OneToMany(() => PriceDetail, (priceDetail) => priceDetail.aircraft)
  priceDetails: PriceDetail[];
}

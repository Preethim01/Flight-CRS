
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceDetail } from './price-detail.entity';
import { Aircraft } from '../aircraft/aircraft.entity';
import { PriceDetailService } from './price-detail.service';
import { PriceDetailController } from './price-detail.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PriceDetail, Aircraft])],
  providers: [PriceDetailService],
  controllers: [PriceDetailController],
})
export class PriceDetailModule {}

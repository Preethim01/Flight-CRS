import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceDetail } from './price-detail.entity';
import { PriceDetailService } from './price-detail.service';
import { PriceDetailController } from './price-detail.controller';
import { Aircraft } from 'src/aircraft/aircraft.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PriceDetail, Aircraft])],
  controllers: [PriceDetailController],
  providers: [PriceDetailService],
})
export class PriceDetailModule {}

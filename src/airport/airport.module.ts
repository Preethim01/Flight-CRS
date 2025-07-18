import { Module } from '@nestjs/common';
import { AirportController } from './airport.controller';
import { AirportService } from './airport.service';

@Module({
  controllers: [AirportController],
  providers: [AirportService],
})
export class AirportModule {}

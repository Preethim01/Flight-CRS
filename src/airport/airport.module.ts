import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Airport } from './airport.entity';
import { AirportService } from './airport.service';
import { AirportController } from './airport.controller';
import { AirportResolver } from './airport.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Airport])],
  providers: [AirportService,AirportResolver],
  controllers: [AirportController],
  exports: [AirportService],
})
export class AirportModule {}

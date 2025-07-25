import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aircraft } from './aircraft.entity';
import { AircraftService } from './aircraft.service';
import { AircraftController } from './aircraft.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Aircraft])],
  providers: [AircraftService],
  controllers: [AircraftController],
  exports: [TypeOrmModule],
})
export class AircraftModule {}

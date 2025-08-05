import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aircraft } from './aircraft.entity';
import { AircraftService } from './aircraft.service';
import { AircraftController } from './aircraft.controller';
import { AircraftResolver } from './aircraft.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Aircraft])],
  controllers: [AircraftController],
  providers: [AircraftService,AircraftResolver],
  exports: [AircraftService],
})
export class AircraftModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pilot } from './pilot.entity';
import { PilotService } from './pilot.service';
import { PilotController } from './pilot.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pilot])],
  controllers: [PilotController],
  providers: [PilotService],
})
export class PilotModule {}

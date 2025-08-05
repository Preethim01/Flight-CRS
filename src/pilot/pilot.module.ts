import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pilot } from './pilot.entity';
import { PilotService } from './pilot.service';
import { PilotController } from './pilot.controller';
import { PilotResolver } from './pilot.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Pilot])],
  controllers: [PilotController],
  providers: [PilotService,PilotResolver],
})
export class PilotModule {}

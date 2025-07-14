import { Module } from '@nestjs/common';
import { CabinClassController } from './cabin-class.controller';
import { CabinClassService } from './cabin-class.service';

@Module({
  controllers: [CabinClassController],
  providers: [CabinClassService]
})
export class CabinClassModule {}

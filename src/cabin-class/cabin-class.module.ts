import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CabinClass } from './cabin-class.entity';
import { CabinClassController } from './cabin-class.controller';
import { CabinClassService } from './cabin-class.service';

@Module({
  imports: [TypeOrmModule.forFeature([CabinClass])],
  controllers: [CabinClassController],
  providers: [CabinClassService],
})
export class CabinClassModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CabinClass } from './cabin-class.entity';
import { CabinClassService } from './cabin-class.service';
import { CabinClassController } from './cabin-class.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CabinClass])],
  providers: [CabinClassService],
  controllers: [CabinClassController],
  exports: [CabinClassService],
})
export class CabinClassModule {}

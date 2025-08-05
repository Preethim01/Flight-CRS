import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CabinClass } from './cabin-class.entity';
import { CabinClassService } from './cabin-class.service';
import { CabinClassController } from './cabin-class.controller';
import { CabinClassResolver } from './cabin-class.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([CabinClass])],
  providers: [CabinClassService,CabinClassResolver],
  controllers: [CabinClassController],
  exports: [CabinClassService],
})
export class CabinClassModule {}

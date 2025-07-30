import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Markup } from './markup.entity';
import { MarkupService } from './markup.service';
import { MarkupController } from './markup.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Markup])],
  controllers: [MarkupController],
  providers: [MarkupService],
  exports: [MarkupService],
})
export class MarkupModule {}

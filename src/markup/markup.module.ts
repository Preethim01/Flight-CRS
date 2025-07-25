import { Module } from '@nestjs/common';
import { MarkupController } from './markup.controller';
import { MarkupService } from './markup.service';

@Module({
  controllers: [MarkupController],
  providers: [MarkupService]
})
export class MarkupModule {}

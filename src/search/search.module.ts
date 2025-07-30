
import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fare } from '../fare/fare.entity';
import { Markup } from '../markup/markup.entity';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    TypeOrmModule.forFeature([Fare, Markup]),
    CacheModule.register(),
  ],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}

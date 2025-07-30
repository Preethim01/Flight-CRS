// src/search/search.controller.ts
import {
  Controller,
  Get,
  Post,
  Param,
  Body,
} from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchDto } from './dto/search-request.dto';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post()
  async search(@Body() searchDto: SearchDto) {
    return this.searchService.searchFlights(searchDto);
  }

  @Get(':token')
  async getSearchResult(@Param('token') token: string) {
    return this.searchService.getCachedResult(token);
  }
}

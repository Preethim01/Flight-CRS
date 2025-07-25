import { Controller, Post, Get, Body } from '@nestjs/common';
import { PriceDetailService } from './price-detail.service';
import { CreatePriceDetailDto } from './dto/create-price-detail.dto';

@Controller('price-detail')
export class PriceDetailController {
  constructor(private readonly priceDetailService: PriceDetailService) {}

  @Post('create')
  create(@Body() dto: CreatePriceDetailDto) {
    return this.priceDetailService.create(dto);
  }

  @Get('list')
  findAll() {
    return this.priceDetailService.findAll();
  }
}

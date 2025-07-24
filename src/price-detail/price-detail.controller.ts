import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { PriceDetailService } from './price-detail.service';
import { CreatePriceDetailDto } from './dto/create-price-detail.dto';
import { UpdatePriceDetailDto } from './dto/update-price-detail.dto';

@Controller('price-details')
export class PriceDetailController {
  constructor(private readonly priceService: PriceDetailService) {}

  @Post('create')
  create(@Body() dto: CreatePriceDetailDto) {
    return this.priceService.create(dto);
  }

  @Get()
  findAll() {
    return this.priceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.priceService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdatePriceDetailDto) {
    return this.priceService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.priceService.remove(+id);
  }
}

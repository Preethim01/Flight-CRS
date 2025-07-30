
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

@Controller('price-detail')
export class PriceDetailController {
  constructor(private readonly service: PriceDetailService) {}

  @Post('create')
  create(@Body() dto: CreatePriceDetailDto) {
    return this.service.create(dto);
  }

  @Get('list')
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdatePriceDetailDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}

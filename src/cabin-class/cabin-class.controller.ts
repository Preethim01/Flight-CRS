// src/cabin-class/cabin-class.controller.ts
import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { CabinClassService } from './cabin-class.service';
import { CreateCabinClassDto } from './dto/create-cabin-class.dto';
import { UpdateCabinClassDto } from './dto/update-cabin-class.dto';

@Controller('cabin-class')
export class CabinClassController {
  constructor(private readonly service: CabinClassService) {}

  @Get('list')
  getAll() {
    return this.service.getAll();
  }

  @Get('view/:id')
  getById(@Param('id') id: number) {
    return this.service.getById(+id);
  }

  @Post('create')
  create(@Body() dto: CreateCabinClassDto) {
    return this.service.create(dto);
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() dto: UpdateCabinClassDto) {
    return this.service.update(+id, dto);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.service.delete(+id);
  }
}

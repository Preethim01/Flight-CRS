import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { CabinClassService } from './cabin-class.service';
import { CreateCabinClassDto } from './dto/create-cabin-class.dto';
import { UpdateCabinClassDto } from './dto/update-cabin-class.dto';

@Controller('cabin-class')
export class CabinClassController {
  constructor(private readonly service: CabinClassService) {}

  @Post('create')
  create(@Body() dto: CreateCabinClassDto) {
    return this.service.create(dto);
  }

  @Get('list')
  findAll() {
    return this.service.findAll();
  }

  @Get('view/:id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(+id);
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() dto: UpdateCabinClassDto) {
    return this.service.update(+id, dto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}

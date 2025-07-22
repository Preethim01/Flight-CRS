import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AirportService } from './airport.service';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';

@Controller('airport')
export class AirportController {
  constructor(private readonly airportService: AirportService) {}

  @Get('list')
  getAll() {
    return this.airportService.getAll();
  }

  @Get('view/:id')
  getOne(@Param('id') id: string) {
    return this.airportService.getById(+id);
  }

  @Post('create')
  create(@Body() dto: CreateAirportDto) {
    return this.airportService.create(dto);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() dto: UpdateAirportDto) {
    return this.airportService.update(+id, dto);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.airportService.delete(+id);
  }
}

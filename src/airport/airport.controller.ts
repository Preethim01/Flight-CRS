import { Controller, Get, Post, Put, Delete, Param, Body , UseGuards } from '@nestjs/common';
import { AirportService } from './airport.service';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('airport')
export class AirportController {
  constructor(private readonly airportService: AirportService) {}

  @Get()
  getAll() {
    return this.airportService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.airportService.getById(+id);
  }

  @Post()
  create(@Body() dto: CreateAirportDto) {
    return this.airportService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAirportDto) {
    return this.airportService.update(+id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.airportService.delete(+id);
  }
}

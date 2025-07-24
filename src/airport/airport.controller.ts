import { Controller, Post, Get, Put, Delete, Param, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AirportService } from './airport.service';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';

@Controller('airport')
export class AirportController {
  constructor(private readonly airportService: AirportService) {}

  @Post('create')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() dto: CreateAirportDto) {
    return this.airportService.create(dto);
  }

  @Get('list')
  findAll() {
    return this.airportService.findAll();
  }

  @Get('view/:id')
  findOne(@Param('id') id: number) {
    return this.airportService.findOne(+id);
  }

  @Put('/update/:id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  update(@Param('id') id: number, @Body() dto: UpdateAirportDto) {
    return this.airportService.update(+id, dto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: number) {
    return this.airportService.remove(+id);
  }
}

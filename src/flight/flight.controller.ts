import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { FlightService } from './flight.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Controller('flight')
export class FlightController {
  constructor(private readonly service: FlightService) {}

  @Get('list')
  getAll() {
    return this.service.getAll();
  }

  @Get('view/:id')
  getById(@Param('id') id: number) {
    return this.service.getById(+id);
  }

  @Post('create')
  create(@Body() dto: CreateFlightDto) {
    return this.service.create(dto);
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() dto: UpdateFlightDto) {
    return this.service.update(+id, dto);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.service.delete(+id);
  }
}

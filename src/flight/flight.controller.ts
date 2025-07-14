import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { FlightService } from './flight.service';

@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Get()
  getAll() {
    return this.flightService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.flightService.getById(+id);
  }

  @Post()
  create(@Body() body: any) {
    return this.flightService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.flightService.update(+id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.flightService.delete(+id);
  }
}

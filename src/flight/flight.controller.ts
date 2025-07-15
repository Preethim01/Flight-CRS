import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { FlightService } from './flight.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Get()
  get() {
    return this.flightService.get();
  }

  @Get('view/:id')
  getOne(@Param('id') id: string) {
    return this.flightService.getById(+id);
  }

  @Post('create')
  create(@Body() dto: CreateFlightDto) {
    return this.flightService.create(dto);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() dto: UpdateFlightDto) {
    return this.flightService.update(+id, dto);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.flightService.delete(+id);
  }
}

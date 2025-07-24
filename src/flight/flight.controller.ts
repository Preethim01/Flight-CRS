// src/flight/flight.controller.ts

import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { FlightService } from './flight.service';
import { CreateFlightDto } from './dto/create-flight.dto';

@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Post('create')
  create(@Body() dto: CreateFlightDto) {
    return this.flightService.create(dto); // ✅ This is the correct line
  }

  @Get('list')
  findAll() {
    return this.flightService.findAll();
  }

  @Get('view/:id')
  findOne(@Param('id') id: number) {
    return this.flightService.findOne(+id);
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() dto: Partial<CreateFlightDto>) {
    return this.flightService.update(+id, dto);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.flightService.delete(+id);
  }
}

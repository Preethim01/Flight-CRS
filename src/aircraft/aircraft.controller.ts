import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { AircraftService } from './aircraft.service';
import { CreateAircraftDto } from './dto/create-aircraft.dto';
import { UpdateAircraftDto } from './dto/update-aircraft.dto';

@Controller('aircraft')
export class AircraftController {
  constructor(private readonly aircraftService: AircraftService) {}

  @Post()
  create(@Body() dto: CreateAircraftDto) {
    return this.aircraftService.create(dto);
  }

  @Get('list')
  findAll() {
    return this.aircraftService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.aircraftService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateAircraftDto) {
    return this.aircraftService.update(+id, dto);
  }

  // @Delete(':id')
  // delete(@Param('id') id: number) {
  //   return this.aircraftService.delete(+id);
  // }
}

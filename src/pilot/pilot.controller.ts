// src/pilot/pilot.controller.ts

import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { PilotService } from './pilot.service';
import { CreatePilotDto } from './dto/create-pilot.dto';
import { UpdatePilotDto } from './dto/update-pilot.dto';

@Controller('pilot')
export class PilotController {
  constructor(private readonly pilotService: PilotService) {}

  @Post('create')
  create(@Body() dto: CreatePilotDto) {
    return this.pilotService.create(dto);
  }

  @Get('list')
  findAll() {
    return this.pilotService.findAll();
  }

  @Get('view/:id')
  findOne(@Param('id') id: string) {
    return this.pilotService.findOne(+id);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() dto: UpdatePilotDto) {
    return this.pilotService.update(+id, dto);
  }

  @Delete('delete:id')
  remove(@Param('id') id: string) {
    return this.pilotService.remove(+id);
  }
}

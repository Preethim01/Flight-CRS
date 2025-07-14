import { Controller, Get, Post, Put, Delete, Param, Body,UseGuards  } from '@nestjs/common';
import { CabinClassService } from './cabin-class.service';
import { CreateCabinClassDto } from './dto/create-cabin-class.dto';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('cabin-class')
export class CabinClassController {
  constructor(private readonly cabinService: CabinClassService) {}

  @Get()
  getAll() {
    return this.cabinService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.cabinService.getById(+id);
  }

  @Post()
  create(@Body() dto: CreateCabinClassDto) {
    return this.cabinService.create(dto); // ✅ Pass full DTO
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CreateCabinClassDto) {
    return this.cabinService.update(+id, dto); // ✅ Pass full DTO
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.cabinService.delete(+id);
  }
}

import { Controller, Get, Post, Put, Delete, Param, Body  } from '@nestjs/common';
import { CabinClassService } from './cabin-class.service';
import { CreateCabinClassDto } from './dto/create-cabin-class.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)


@Controller('cabin-class')
export class CabinClassController {
  constructor(private readonly cabinService: CabinClassService) {}

  // GET all cabin classes
  @Get()
  getAll() {
    return this.cabinService.getAll();
  }

  // GET a specific cabin class by ID
  @Get('view/:id')
  getOne(@Param('id') id: string) {
    return this.cabinService.getById(+id);
  }

  // POST a new cabin class
  @Post('create')
  create(@Body() dto: CreateCabinClassDto) {
    return this.cabinService.create(dto);
  }

  // PUT update a cabin class
  @Put('update/:id')
  update(@Param('id') id: string, @Body() dto: CreateCabinClassDto) {
    return this.cabinService.update(+id, dto);
  }

  // DELETE a cabin class
  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.cabinService.delete(+id);
  }
}

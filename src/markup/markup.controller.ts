import {Body,Controller,Post,Get,Param,Put,Delete,ParseIntPipe,
} from '@nestjs/common';
import { MarkupService } from './markup.service';
import { CreateMarkupDto } from './dto/create-markup.dto';
import { UpdateMarkupDto } from './dto/update-markup.dto';

@Controller('markup')
export class MarkupController {
  constructor(private readonly markupService: MarkupService) {}

  @Post('create')
  create(@Body() dto: CreateMarkupDto) {
    return this.markupService.create(dto);
  }

  @Get('list')
  findAll() {
    return this.markupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.markupService.findOne(id);
  }

  @Put('update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateMarkupDto,
  ) {
    return this.markupService.update(id, dto);
  }

  @Delete('delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.markupService.delete(id);
  }
}

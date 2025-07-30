import {Controller,Post,Get,Put,Delete,Param,Body,UploadedFile,UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { AircraftService } from './aircraft.service';
import { CreateAircraftDto } from './dto/create-aircraft.dto';
import { UpdateAircraftDto } from './dto/update-aircraft.dto';

@Controller('aircraft')
export class AircraftController {
  constructor(private readonly aircraftService: AircraftService) {}

  @Post('create')
  @UseInterceptors(
    FileInterceptor('aircraftImage', {
      storage: diskStorage({
        destination: './uploads/aircrafts',
        filename: (req, file, cb) => {
          const uniqueName = `${Date.now()}${extname(file.originalname)}`;
          cb(null, uniqueName);
        },
      }),
    }),
  )
  create(
    @Body() dto: CreateAircraftDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.aircraftService.create(dto, file);
  }

  @Get('list')
  findAll() {
    return this.aircraftService.findAll();
  }

  @Get('view/:id')
  findOne(@Param('id') id: number) {
    return this.aircraftService.findOne(id);
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() dto: UpdateAircraftDto) {
    return this.aircraftService.update(id, dto);
  }

  // @Delete(':id')
  // delete(@Param('id') id: number) {
  //   return this.aircraftService.delete(id);
  // }
}

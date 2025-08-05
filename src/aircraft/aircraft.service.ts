// src/aircraft/aircraft.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aircraft } from './aircraft.entity';
import { CreateAircraftDto } from './dto/create-aircraft.dto';
import { UpdateAircraftDto } from './dto/update-aircraft.dto';

@Injectable()
export class AircraftService {
  constructor(
    @InjectRepository(Aircraft)
    private readonly aircraftRepo: Repository<Aircraft>,
  ) {}

  async create(dto: CreateAircraftDto, image?: Express.Multer.File): Promise<Aircraft> {
    const aircraft = this.aircraftRepo.create({
      aircraftName: dto.aircraftName,
      aircraftImage: image?.filename || dto.aircraftImage, // supports REST (file) or GraphQL (string)
    });
    return this.aircraftRepo.save(aircraft);
  }

  async findAll(): Promise<Aircraft[]> {
    return this.aircraftRepo.find();
  }

  async findOne(id: number): Promise<Aircraft> {
    const aircraft = await this.aircraftRepo.findOneBy({ id });
    if (!aircraft) throw new NotFoundException('Aircraft not found');
    return aircraft;
  }

  async update(id: number, dto: UpdateAircraftDto): Promise<Aircraft> {
    const aircraft = await this.aircraftRepo.findOneBy({ id });
    if (!aircraft) throw new NotFoundException('Aircraft not found');

    Object.assign(aircraft, dto);
    return this.aircraftRepo.save(aircraft);
  }

  async delete(id: number): Promise<{ message: string }> {
    const aircraft = await this.aircraftRepo.findOneBy({ id });
    if (!aircraft) throw new NotFoundException('Aircraft not found');

    await this.aircraftRepo.remove(aircraft);
    return { message: 'Aircraft deleted' };
  }
}

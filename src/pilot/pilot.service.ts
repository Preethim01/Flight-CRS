// src/pilot/pilot.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pilot } from './pilot.entity';
import { CreatePilotDto } from './dto/create-pilot.dto';
import { UpdatePilotDto } from './dto/update-pilot.dto';

@Injectable()
export class PilotService {
  constructor(
    @InjectRepository(Pilot)
    private readonly pilotRepo: Repository<Pilot>,
  ) {}

  async create(dto: CreatePilotDto) {
    const pilot = this.pilotRepo.create(dto);
    return this.pilotRepo.save(pilot);
  }

  findAll() {
    return this.pilotRepo.find();
  }

  findOne(id: number) {
    return this.pilotRepo.findOneBy({ id });
  }

  async update(id: number, dto: UpdatePilotDto) {
    const pilot = await this.pilotRepo.findOneBy({ id });
    if (!pilot) throw new NotFoundException('Pilot not found');
    Object.assign(pilot, dto);
    return this.pilotRepo.save(pilot);
  }

  async remove(id: number) {
    const result = await this.pilotRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Pilot not found');
    }
    return { message: 'Pilot deleted successfully' };
  }
}

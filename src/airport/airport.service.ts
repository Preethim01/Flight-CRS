import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Airport } from './airport.entity';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';

@Injectable()
export class AirportService {
  constructor(
    @InjectRepository(Airport)
    private airportRepo: Repository<Airport>,
  ) {}

  getAll() {
    return this.airportRepo.find();
  }

  getById(id: number) {
    return this.airportRepo.findOneBy({ id });
  }

  async create(dto: CreateAirportDto) {
    const airport = this.airportRepo.create(dto);
    return await this.airportRepo.save(airport);
  }

  async update(id: number, dto: UpdateAirportDto) {
    const airport = await this.airportRepo.findOneBy({ id });
    if (!airport) return { message: 'Airport not found' };

    Object.assign(airport, dto);
    return await this.airportRepo.save(airport);
  }

  async delete(id: number) {
    const result = await this.airportRepo.delete(id);
    return result.affected ? { message: 'Deleted successfully' } : { message: 'Airport not found' };
  }
}

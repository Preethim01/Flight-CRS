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
    private readonly airportRepo: Repository<Airport>,
  ) {}

  create(dto: CreateAirportDto) {
    const airport = this.airportRepo.create(dto);
    return this.airportRepo.save(airport);
  }

  findAll() {
    return this.airportRepo.find();
  }

  findOne(id: number) {
    return this.airportRepo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateAirportDto) {
    const airport = await this.airportRepo.findOneBy({ id });
    if (!airport) return { message: 'Airport not found' };

    Object.assign(airport, dto);
    return this.airportRepo.save(airport);
  }

  async remove(id: number) {
    const airport = await this.airportRepo.findOneBy({ id });
    if (!airport) return { message: 'Airport not found' };

    await this.airportRepo.remove(airport);
    return { message: 'Airport deleted successfully' };
  }
}

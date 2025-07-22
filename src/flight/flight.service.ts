import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flight } from './flight.entity';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(Flight)
    private flightRepo: Repository<Flight>,
  ) {}

  getAll() {
    return this.flightRepo.find();
  }

  getById(id: number) {
    return this.flightRepo.findOneBy({ id });
  }

  async create(dto: CreateFlightDto) {
    const flight = this.flightRepo.create(dto);
    return await this.flightRepo.save(flight);
  }

  async update(id: number, dto: UpdateFlightDto) {
    const flight = await this.flightRepo.findOneBy({ id });
    if (!flight) return { message: 'Flight not found' };

    Object.assign(flight, dto);
    return await this.flightRepo.save(flight);
  }

  async delete(id: number) {
    const result = await this.flightRepo.delete(id);
    return result.affected ? { message: 'Deleted successfully' } : { message: 'Flight not found' };
  }
}

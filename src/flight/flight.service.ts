
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Flight } from './flight.entity';
import { Repository } from 'typeorm';
import { CreateFlightDto } from './dto/create-flight.dto';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(Flight)
    private readonly flightRepo: Repository<Flight>,
  ) {}

  async create(dto: CreateFlightDto) {
    const flight = this.flightRepo.create(dto);
    return this.flightRepo.save(flight);
  }

  findAll() {
    return this.flightRepo.find();
  }

  findOne(id: number) {
    return this.flightRepo.findOneBy({ id });
  }

  async update(id: number, dto: Partial<CreateFlightDto>) {
    const flight = await this.flightRepo.findOneBy({ id });
    if (!flight) {
      throw new Error('Flight not found');
    }
    Object.assign(flight, dto);
    return this.flightRepo.save(flight);
  }

  async delete(id: number) {
    const result = await this.flightRepo.delete(id);
    return { message: `Deleted ${result.affected} record(s)` };
  }
}

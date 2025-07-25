import { Injectable } from '@nestjs/common';
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

 create(dto: CreateAircraftDto) {
  const aircraft = this.aircraftRepo.create(dto);
  return this.aircraftRepo.save(aircraft);
}


  findAll() {
    return this.aircraftRepo.find();
  }

  findOne(id: number) {
    return this.aircraftRepo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateAircraftDto) {
    const aircraft = await this.aircraftRepo.findOneBy({ id });
    if (!aircraft) return { message: 'Aircraft not found' };

    Object.assign(aircraft, dto);
    return this.aircraftRepo.save(aircraft);
  }

  async delete(id: number) {
    const aircraft = await this.aircraftRepo.findOneBy({ id });
    if (!aircraft) return { message: 'Aircraft not found' };

    await this.aircraftRepo.remove(aircraft);
    return { message: 'Aircraft deleted' };
  }
}

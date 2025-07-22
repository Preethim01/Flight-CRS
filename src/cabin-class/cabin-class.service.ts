import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CabinClass } from './cabin-class.entity';
import { CreateCabinClassDto } from './dto/create-cabin-class.dto';
import { UpdateCabinClassDto } from './dto/update-cabin-class.dto';

@Injectable()
export class CabinClassService {
  constructor(
    @InjectRepository(CabinClass)
    private cabinRepo: Repository<CabinClass>,
  ) {}

  getAll() {
    return this.cabinRepo.find();
  }

  getById(id: number) {
    return this.cabinRepo.findOneBy({ id });
  }

  async create(dto: CreateCabinClassDto) {
    const cabin = this.cabinRepo.create(dto);
    return await this.cabinRepo.save(cabin);
  }

  async update(id: number, dto: UpdateCabinClassDto) {
    const cabin = await this.cabinRepo.findOneBy({ id });
    if (!cabin) return { message: 'Cabin class not found' };

    Object.assign(cabin, dto);
    return await this.cabinRepo.save(cabin);
  }

  async delete(id: number) {
    const result = await this.cabinRepo.delete(id);
    return result.affected ? { message: 'Deleted successfully' } : { message: 'Cabin class not found' };
  }
}

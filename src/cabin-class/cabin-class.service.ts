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
    private cabinClassRepo: Repository<CabinClass>,
  ) {}

  create(dto: CreateCabinClassDto) {
    const newClass = this.cabinClassRepo.create(dto);
    return this.cabinClassRepo.save(newClass);
  }

  findAll() {
    return this.cabinClassRepo.find();
  }

  findOne(id: number) {
    return this.cabinClassRepo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateCabinClassDto) {
    const cabin = await this.cabinClassRepo.findOneBy({ id });
    if (!cabin) return { message: 'Cabin class not found' };

    Object.assign(cabin, dto);
    return this.cabinClassRepo.save(cabin);
  }

  async remove(id: number) {
    const cabin = await this.cabinClassRepo.findOneBy({ id });
    if (!cabin) return { message: 'Cabin class not found' };

    await this.cabinClassRepo.remove(cabin);
    return { message: 'Cabin class deleted' };
  }
}

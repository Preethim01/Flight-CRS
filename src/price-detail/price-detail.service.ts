import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PriceDetail } from './price-detail.entity';
import { CreatePriceDetailDto } from './dto/create-price-detail.dto';
import { UpdatePriceDetailDto } from './dto/update-price-detail.dto';
import { Aircraft } from '../aircraft/aircraft.entity';

@Injectable()
export class PriceDetailService {
  constructor(
    @InjectRepository(PriceDetail)
    private readonly priceDetailRepo: Repository<PriceDetail>,
    @InjectRepository(Aircraft)
    private readonly aircraftRepo: Repository<Aircraft>,
  ) {}

  async create(dto: CreatePriceDetailDto) {
    const aircraft = await this.aircraftRepo.findOne({ where: { name: dto.aircraftName } });
    if (!aircraft) throw new NotFoundException('Aircraft not found');

    const priceDetail = this.priceDetailRepo.create({
      aircraftName: dto.aircraftName,
      startDate: new Date(dto.startDate),
      endDate: new Date(dto.endDate),
      adultFare: dto.adultFare,
      childFare: dto.childFare,
      infantFare: dto.infantFare,
      tax: dto.tax,
    });

    return this.priceDetailRepo.save(priceDetail);
  }

  async findAll() {
    return await this.priceDetailRepo.find();
  }
}

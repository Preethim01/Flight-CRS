import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PriceDetail } from './price-detail.entity';
import { CreatePriceDetailDto } from './dto/create-price-detail.dto';
import { UpdatePriceDetailDto } from './dto/update-price-detail.dto';
import { Aircraft } from 'src/aircraft/aircraft.entity';

@Injectable()
export class PriceDetailService {
  constructor(
    @InjectRepository(PriceDetail)
    private readonly priceRepo: Repository<PriceDetail>,

    @InjectRepository(Aircraft)
    private readonly aircraftRepo: Repository<Aircraft>,
  ) {}

  async create(dto: CreatePriceDetailDto) {
    const aircraft = await this.aircraftRepo.findOne({
      where: { id: dto.aircraftId },
    });

    if (!aircraft) {
      throw new HttpException('Aircraft not found', HttpStatus.NOT_FOUND);
    }

    const priceDetail = this.priceRepo.create({
      startDate: dto.startDate,
      endDate: dto.endDate,
      adultFare: dto.adultFare,
      childFare: dto.childFare,
      infantFare: dto.infantFare,
      tax: dto.tax,
      aircraft,
    });

    return this.priceRepo.save(priceDetail);
  }

  findAll() {
    return this.priceRepo.find({ relations: ['aircraft'] });
  }

  findOne(id: number) {
    return this.priceRepo.findOne({ where: { id }, relations: ['aircraft'] });
  }

  async update(id: number, dto: UpdatePriceDetailDto) {
    const priceDetail = await this.priceRepo.findOne({ where: { id } });
    if (!priceDetail) {
      throw new HttpException('Price detail not found', HttpStatus.NOT_FOUND);
    }

    // Optionally update aircraft
    if (dto.aircraftId) {
      const aircraft = await this.aircraftRepo.findOne({ where: { id: dto.aircraftId } });
      if (!aircraft) {
        throw new HttpException('Aircraft not found', HttpStatus.NOT_FOUND);
      }
      priceDetail.aircraft = aircraft;
    }

    Object.assign(priceDetail, dto);
    return this.priceRepo.save(priceDetail);
  }

  async remove(id: number) {
    const priceDetail = await this.priceRepo.findOne({ where: { id } });
    if (!priceDetail) {
      throw new HttpException('Price detail not found', HttpStatus.NOT_FOUND);
    }

    return this.priceRepo.remove(priceDetail);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PriceDetail } from './price-detail.entity';
import { CreatePriceDetailDto } from './dto/create-price-detail.dto';
import { UpdatePriceDetailDto } from './dto/update-price-detail.dto';

@Injectable()
export class PriceDetailService {
  constructor(
    @InjectRepository(PriceDetail)
    private priceDetailRepo: Repository<PriceDetail>,
  ) {}

  async create(dto: CreatePriceDetailDto) {
    const priceDetail = this.priceDetailRepo.create(dto);
    return this.priceDetailRepo.save(priceDetail);
  }

  findAll() {
    return this.priceDetailRepo.find();
  }

  findOne(id: number) {
    return this.priceDetailRepo.findOneBy({ id });
  }

  async update(id: number, dto: UpdatePriceDetailDto) {
    const priceDetail = await this.priceDetailRepo.findOneBy({ id });
    if (!priceDetail) return { message: 'Price detail not found' };

    Object.assign(priceDetail, dto);
    return this.priceDetailRepo.save(priceDetail);
  }

  async delete(id: number) {
    const priceDetail = await this.priceDetailRepo.findOneBy({ id });
    if (!priceDetail) return { message: 'Price detail not found' };

    await this.priceDetailRepo.remove(priceDetail);
    return { message: 'Price detail deleted' };
  }
}

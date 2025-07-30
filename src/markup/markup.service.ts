import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Markup } from './markup.entity';
import { CreateMarkupDto } from './dto/create-markup.dto';
import { UpdateMarkupDto } from './dto/update-markup.dto';

@Injectable()
export class MarkupService {
  constructor(
    @InjectRepository(Markup)
    private markupRepo: Repository<Markup>,
  ) {}

  async create(dto: CreateMarkupDto) {
    const markup = this.markupRepo.create(dto);
    return await this.markupRepo.save(markup);
  }

  async findAll() {
    return await this.markupRepo.find();
  }

  async findOne(id: number) {
    const markup = await this.markupRepo.findOneBy({ id });
    if (!markup) throw new NotFoundException('Markup not found');
    return markup;
  }

  async update(id: number, dto: UpdateMarkupDto) {
    const markup = await this.markupRepo.findOneBy({ id });
    if (!markup) throw new NotFoundException('Markup not found');

    Object.assign(markup, dto);
    return await this.markupRepo.save(markup);
  }

  async delete(id: number) {
    const markup = await this.markupRepo.findOneBy({ id });
    if (!markup) throw new NotFoundException('Markup not found');

    await this.markupRepo.remove(markup);
    return { message: 'Deleted successfully' };
  }
  async getCurrentMarkup(): Promise<{ type: 'fixed' | 'percent'; amount: number }> {
    const markup = await this.markupRepo.findOne({
      order: { id: 'DESC' }, 
    });

    if (!markup) {
      return { type: 'fixed', amount: 0 }; 
    }

    return {
      type: markup.markupType,
      amount: markup.amount,
    };
  }
}

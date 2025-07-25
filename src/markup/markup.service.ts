import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Markup } from './markup.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MarkupService {
     constructor(
    @InjectRepository(Markup)
    private markupRepo: Repository<Markup>,
  ) {}

   create(dto: CreateMarkupDto) {
    const markup = this.markupRepo.create(dto);
    return this.markupRepo.save(markup);
  }
}

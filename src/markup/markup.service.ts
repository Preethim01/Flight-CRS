import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Markup } from './markup.entity';
import { Repository } from 'typeorm';
import { CreateMarkupDto } from './dto/create-markup.dto';

@Injectable()
export class MarkupService {
     constructor(
    @InjectRepository(Markup)
    private markupRepo: Repository<Markup>,
  ) {}

   create(dto: CreateMarkupDto) {
    const markup = this.markupRepo.create();
    return this.markupRepo.save(markup);
  }
}

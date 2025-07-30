import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fare } from '../fare/fare.entity';
import { Repository } from 'typeorm';
import { SearchDto } from './dto/search-request.dto';
import { Markup } from '../markup/markup.entity';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Fare)
    private fareRepo: Repository<Fare>,

    @InjectRepository(Markup)
    private markupRepo: Repository<Markup>,

    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
  ) {}

  async searchFlights(dto: SearchDto) {
    const { origin, destination, date, adult, child, infant } = dto;

    const fares = await this.fareRepo.find({
      where: { origin, destination, date },
    });

    const markup = await this.markupRepo.findOne({where: {}});

    const result = fares.map((fare) => {
      const adultTotal = fare.adultFare * adult;
      const childTotal = fare.childFare * child;
      const infantTotal = fare.infantFare * infant;
      const tax = fare.tax;

      let markupAmount = 0;

      // ✅ Safely calculate markup only if it exists
      if (markup) {
        if (markup.markupType === 'percent') {
          markupAmount =
            (adultTotal + childTotal + infantTotal + tax) *
            (markup.amount / 100);
        } else {
          markupAmount = markup.amount;
        }
      }

      const totalFare =
        adultTotal + childTotal + infantTotal + tax + markupAmount;

      return {
        flightNumber: fare.flightNumber,
        origin: fare.origin,
        destination: fare.destination,
        aircraft: fare.aircraft,
        totalFare,
      };
    });

    const token = uuidv4();
    await this.cacheManager.set(token, result, 300_000); // cache for 5 mins

    return { token, result };
  }

  async getCachedResult(token: string) {
    const result = await this.cacheManager.get(token);
    if (!result) {
      return { message: 'Search result not found or expired' };
    }
    return { token, result };
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-ioredis';

import { AirportModule } from './airport/airport.module';
import { CabinClassModule } from './cabin-class/cabin-class.module';
import { FlightModule } from './flight/flight.module';
import { PilotModule } from './pilot/pilot.module';
import { AircraftModule } from './aircraft/aircraft.module';
import { PriceDetailModule } from './price-detail/price-detail.module';
import { MarkupModule } from './markup/markup.module';
import { FareModule } from './fare/fare.module';
import { SearchModule } from './search/search.module';


@Module({
  imports: [
    
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: 'localhost',
      port: 6379,
      ttl: 300, 
    }),

    
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin@123',
      database: 'airline',
      autoLoadEntities: true,
      synchronize: true,
    }),

    
    AirportModule,
    CabinClassModule,
    FlightModule,
    PilotModule,
    AircraftModule,
    PriceDetailModule,
    MarkupModule,
    FareModule,
    SearchModule,

  ],
})
export class AppModule {}

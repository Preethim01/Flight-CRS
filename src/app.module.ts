import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirportModule } from './airport/airport.module';
import { CabinClassModule } from './cabin-class/cabin-class.module';
import { FlightModule } from './flight/flight.module';
import { PilotModule } from './pilot/pilot.module';
import { AircraftModule } from './aircraft/aircraft.module';
import { PriceDetailModule } from './price-detail/price-detail.module';
import { MarkupModule } from './markup/markup.module';

@Module({
  imports: [
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
  ],
})
export class AppModule {}

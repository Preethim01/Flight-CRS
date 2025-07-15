import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightModule } from './flight/flight.module';
import { AirportModule } from './airport/airport.module';
import { CabinClassModule } from './cabin-class/cabin-class.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [FlightModule, AirportModule, CabinClassModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

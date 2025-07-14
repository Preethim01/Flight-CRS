import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CabinClassModule } from './cabin-class/cabin-class.module';
import { AirportModule } from './airport/airport.module';
import { FlightModule } from './flight/flight.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [CabinClassModule, AirportModule, FlightModule, AuthModule],
      controllers: [AppController],
      providers: [AppService],
})
export class AppModule {}

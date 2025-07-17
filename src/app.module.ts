import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightModule } from './flight/flight.module';
import { AirportModule } from './airport/airport.module';
import { CabinClassModule } from './cabin-class/cabin-class.module';
import { AuthModule } from './auth/auth.module';

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
    FlightModule,
    AirportModule,
    CabinClassModule,
    AuthModule,
  ],
})
export class AppModule {}

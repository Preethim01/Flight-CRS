import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirportModule } from './airport/airport.module';
import { CabinClassModule } from './cabin-class/cabin-class.module';
import { FlightModule } from './flight/flight.module';
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
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true, // <--- This is important to see queries in logs
    }),
    AirportModule,
    CabinClassModule,
    FlightModule,
    AuthModule,
  ],
})
export class AppModule {}

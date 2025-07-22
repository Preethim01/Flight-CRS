import { IsString, IsDateString } from 'class-validator';

export class CreateFlightDto {
  @IsString()
  flightNumber: string;

  @IsString()
  origin: string;

  @IsString()
  destination: string;

  @IsDateString()
  departureTime: Date;
}

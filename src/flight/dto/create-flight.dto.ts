import { IsString, IsNumber, Matches } from 'class-validator';

export class CreateFlightDto {
  @IsString()
  flightName: string;


  @IsString()
  @Matches(/^[A-Z]{3}$/, { message: 'Origin code must be 3 uppercase letters' })
  origin: string;

  @IsString()
  @Matches(/^[A-Z]{3}$/, { message: 'Destination code must be 3 uppercase letters' })
  destination: string;

  @IsNumber()
  duration: number; // in minutes
}

import { IsString, Matches } from 'class-validator';

export class CreateAirportDto {
  @IsString()
  @Matches(/^[A-Z]{3}$/, { message: 'Airport code must be 3 uppercase letters' })
  airportCode: string;

  @IsString()
  airportName: string;
}

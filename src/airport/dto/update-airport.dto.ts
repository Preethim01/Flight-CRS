import { IsString, Matches } from 'class-validator';

export class UpdateAirportDto {
  @IsString()
  airportName: string;

  @IsString()
  @Matches(/^[A-Z]{3}$/, {
    message: 'Airport code must be exactly 3 uppercase letters',
  })
  airportCode: string;
}

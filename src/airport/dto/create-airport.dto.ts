import { IsNotEmpty, Length, Matches } from 'class-validator';

export class CreateAirportDto {
  @IsNotEmpty({ message: 'Airport name is required' })
  airportName: string;

  @IsNotEmpty({ message: 'Airport code is required' })
  @Length(3, 3, { message: 'Airport code must be exactly 3 characters' })
  @Matches(/^[A-Z]{3}$/, {
    message: 'Airport code must be 3 uppercase letters (e.g., BLR)',
  })
  airportCode: string;
}

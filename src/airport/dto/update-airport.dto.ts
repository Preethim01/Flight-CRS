import { IsOptional, Length, Matches } from 'class-validator';

export class UpdateAirportDto {
  @IsOptional()
  airportName?: string;

  @IsOptional()
  @Length(3, 3, { message: 'Airport code must be exactly 3 characters' })
  @Matches(/^[A-Z]{3}$/, {
    message: 'Airport code must be 3 uppercase letters (e.g., BLR)',
  })
  airportCode?: string;
}

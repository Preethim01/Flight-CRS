import { IsString, IsNumber, Matches, IsOptional } from 'class-validator';

export class UpdateFlightDto {
  @IsOptional()
  @IsString()
  flightName?: string;

  @IsOptional()
  @IsString()
  @Matches(/^[A-Z]{3}$/, { message: 'Origin must be 3 uppercase letters' })
  origin?: string;

  @IsOptional()
  @IsString()
  @Matches(/^[A-Z]{3}$/, { message: 'Destination must be 3 uppercase letters' })
  destination?: string;

  @IsOptional()
  @IsNumber({}, { message: 'Duration must be a number' })
  duration?: number;
}

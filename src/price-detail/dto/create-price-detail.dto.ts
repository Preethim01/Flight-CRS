
import {
  IsString,
  IsNumber,
  IsDateString,
} from 'class-validator';

export class CreatePriceDetailDto {
  @IsString()
  aircraftName: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsNumber()
  adultFare: number;

  @IsNumber()
  childFare: number;

  @IsNumber()
  infantFare: number;

  @IsNumber()
  tax: number;
}

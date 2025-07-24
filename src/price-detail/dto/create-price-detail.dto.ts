import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePriceDetailDto {
  @IsNotEmpty()
  aircraftId: number;

  @IsNotEmpty()
  startDate: string;

  @IsNotEmpty()
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

import { IsOptional, IsNumber } from 'class-validator';

export class UpdatePriceDetailDto {
  @IsOptional()
  startDate?: string;

  @IsOptional()
  endDate?: string;

  @IsOptional()
  @IsNumber()
  adultFare?: number;

  @IsOptional()
  @IsNumber()
  childFare?: number;

  @IsOptional()
  @IsNumber()
  infantFare?: number;

  @IsOptional()
  @IsNumber()
  tax?: number;
}

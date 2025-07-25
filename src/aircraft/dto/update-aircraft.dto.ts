import { IsOptional } from 'class-validator';

export class UpdateAircraftDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  image?: string;
}

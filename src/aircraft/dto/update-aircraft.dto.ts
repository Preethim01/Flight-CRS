import { IsOptional } from 'class-validator';

export class UpdateAircraftDto {
  @IsOptional()
  aircraftName?: string;

  @IsOptional()
  aircraftImage?: string;
}

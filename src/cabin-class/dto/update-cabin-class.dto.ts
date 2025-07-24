import { IsOptional, IsString } from 'class-validator';

export class UpdateCabinClassDto {
  @IsOptional()
  @IsString()
  name?: string;
}

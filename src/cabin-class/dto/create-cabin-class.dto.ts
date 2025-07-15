import { IsString, MinLength } from 'class-validator';

export class CreateCabinClassDto {
  @IsString()
  @MinLength(3, { message: 'Cabin class name must be at least 3 characters long' })
  name: string;
}


import { IsNotEmpty, IsString, IsDateString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateFlightDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  flightNumber: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  origin: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  destination: string;

  @Field()
  @IsNotEmpty()
  @IsDateString()
  departureTime: Date;
}

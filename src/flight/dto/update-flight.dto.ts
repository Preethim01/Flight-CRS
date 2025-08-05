import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateFlightDto } from './create-flight.dto';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateFlightDto extends PartialType(CreateFlightDto) {
  @Field({ nullable: true })
  @IsOptional()
  flightNumber?: string;

  @Field({ nullable: true })
  @IsOptional()
  origin?: string;

  @Field({ nullable: true })
  @IsOptional()
  destination?: string;

  @Field({ nullable: true })
  @IsOptional()
  departureTime?: Date;
}

import { IsOptional, Length, Matches } from 'class-validator';
import { InputType,Field } from '@nestjs/graphql';

@InputType()
export class UpdateAirportDto {
  @Field()
  @IsOptional()
  airportName?: string;

  @Field()
  @IsOptional()
  @Length(3, 3, { message: 'Airport code must be exactly 3 characters' })
  @Matches(/^[A-Z]{3}$/, {
    message: 'Airport code must be 3 uppercase letters (e.g., BLR)',
  })
  airportCode?: string;
}

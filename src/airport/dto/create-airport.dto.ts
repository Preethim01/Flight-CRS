import { IsNotEmpty, Length, Matches } from 'class-validator';
import { InputType,Field } from '@nestjs/graphql';

@InputType()
export class CreateAirportDto {
  @Field()
  @IsNotEmpty({ message: 'Airport name is required' })
  airportName: string;

  @Field()
  @IsNotEmpty({ message: 'Airport code is required' })
  @Length(3, 3, { message: 'Airport code must be exactly 3 characters' })
  @Matches(/^[A-Z]{3}$/, {
    message: 'Airport code must be 3 uppercase letters (e.g., BLR)',
  })
  airportCode: string;
}

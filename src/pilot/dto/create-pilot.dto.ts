import { IsString, IsDateString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { GraphQLISODateTime } from '@nestjs/graphql';


@InputType()
export class CreatePilotDto {
  @Field()
  @IsString()
  pilotName: string;

  @Field()
  @IsString()
  licenseNumber: string;
  
  @Field()
  @Field(() => GraphQLISODateTime)
  licenseExpiry: Date;
}

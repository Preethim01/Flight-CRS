
import { IsEnum, IsNumber } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { MarkupType } from '../markup.entity'; 

@InputType()
export class CreateMarkupDto {
  @Field(() => MarkupType)
  markupType: MarkupType;

  @Field()
  @IsNumber()
  amount: number;
}

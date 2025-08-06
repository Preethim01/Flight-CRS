
import { InputType, PartialType } from '@nestjs/graphql';
import { CreateMarkupDto } from './create-markup.dto';

@InputType()
export class UpdateMarkupDto extends PartialType(CreateMarkupDto) {}

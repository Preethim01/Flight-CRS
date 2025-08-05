import { InputType} from '@nestjs/graphql';
import { PartialType } from '@nestjs/graphql';

import { CreatePilotDto } from './create-pilot.dto';
@InputType()
export class UpdatePilotDto extends PartialType(CreatePilotDto) {}

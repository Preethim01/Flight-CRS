import { IsString, IsDateString } from 'class-validator';

export class CreatePilotDto {
  @IsString()
  pilotName: string;

  @IsString()
  licenseNumber: string;

  @IsDateString()
  licenseExpiry: string; // ISO string, validated as date
}

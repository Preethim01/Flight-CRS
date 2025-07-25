import {  IsEnum, IsNumber} from "class-validator";

export class CreateMarkupDto{
    @IsEnum(['fixed','percent'])
    type:'fixed'|'percent'

    @IsNumber()
    amount:number;
}
import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()
export class Markup{
    @PrimaryGeneratedColumn()
    id:number;
     
    @Column()
    type:'fixed'|'percentage';

    @Column()
    amount:number;

}
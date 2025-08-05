
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { GraphQLISODateTime } from '@nestjs/graphql';


@ObjectType()
@Entity()
export class Pilot {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  pilotName: string;

  @Field()
  @Column()
  licenseNumber: string;

  @Field(() => GraphQLISODateTime)
  @Column()
  licenseExpiry: Date;
}

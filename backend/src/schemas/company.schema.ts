import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MySchema } from 'mongoose';
import Document from 'mongoose';
// import { User } from './user.schema';

export type CompanyDocument = Company & Document;

@Schema({ timestamps: true })
export class Company {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ type: MySchema.Types.ObjectId, ref: 'User' })
  author: string;

  @Prop({
    type: [{ type: MySchema.Types.ObjectId, ref: 'User' }],
    required: true,
    unique: true,
    sparse: true,
  })
  usersApplied: string[];

  @Prop({ required: true })
  numOpenings: number;

  @Prop({ required: true })
  jobDescription: string;

  @Prop({ default: false, required: true })
  currentlyHiring: boolean;

  @Prop()
  location: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);

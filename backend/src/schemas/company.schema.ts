import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MySchema } from 'mongoose';
import Document from 'mongoose';
import { User } from './user.schema';

export type CompanyDocument = Company & Document;

@Schema({ timestamps: true })
export class Company {
  @Prop({ unique: true, required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({
    type: [{ usersApplied: { type: MySchema.Types.ObjectId, ref: 'Users' } }],
  })
  usersApplied: User;

  @Prop({ type: MySchema.Types.ObjectId, ref: 'Users' })
  author: User;
}

export const CompanySchema = SchemaFactory.createForClass(Company);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MySchema } from 'mongoose';
import Document from 'mongoose';
import { User } from './user.schema';

export type CompanyDocument = Company & Document;

@Schema({ timestamps: true })
export class Company {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({
    type: [
      {
        type: MySchema.Types.ObjectId,
        ref: 'User',
      },
    ],
  })
  usersApplied: User[];

  @Prop({ type: MySchema.Types.ObjectId, ref: 'User' })
  author: User;
}

export const CompanySchema = SchemaFactory.createForClass(Company);

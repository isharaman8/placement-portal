import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import Document from 'mongoose';
import { Schema as MySchema } from 'mongoose';

export type UserDocument = User & Document;

export type TRole = 'student' | 'admin' | 'employer';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  emailID: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  role: TRole;

  @Prop()
  companiesApplied: Array<any>;

  @Prop({ type: [{ type: MySchema.Types.ObjectId, ref: 'User' }] })
  friends: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import Document from 'mongoose';
import { Schema as MySchema } from 'mongoose';

export type NotificationDocument = Notification & Document;

@Schema({ timestamps: true })
export class Notification {
  @Prop({ required: true })
  content: string;

  @Prop({ required: true, type: MySchema.Types.ObjectId, ref: 'User' })
  notificationfor: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);

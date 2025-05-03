// libs/db/src/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  oauthProvider?: string;

  @Prop()
  oauthId?: string;

  @Prop({ type: Date })
  dateOfBirth?: Date;

  @Prop({
    type: {
      type: { type: String, enum: ['Point'], default: 'Point' },
      coordinates: { type: [Number], default: [0, 0] },
      city: String,
      country: String,
    },
    default: undefined,
  })
  location?: {
    type: 'Point';
    coordinates: [number, number];
    city?: string;
    country?: string;
  };

  @Prop({ type: [String], default: [] })
  interests: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);

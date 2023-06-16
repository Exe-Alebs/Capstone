import mongoose, { Document, Schema } from 'mongoose';
import { IUrl } from './url';
import { IUser } from './user';

// Interface for Link model
export interface ILink extends Document {
  user: IUser['_id'];
  url: IUrl['_id'];
}

// Schema for Link model
const linkSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  url: {
    type: Schema.Types.ObjectId,
    ref: 'Url',
    required: true,
  },
});

// Link model
export const Link = mongoose.model<ILink>('Link', linkSchema);

export default Link;

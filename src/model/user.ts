import mongoose, { Document, Schema } from 'mongoose';
import { IUrl } from './url';

// Interface for User model
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

// Schema for User model
const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// User model
const User = mongoose.model<IUser>('User', userSchema);
export default User;

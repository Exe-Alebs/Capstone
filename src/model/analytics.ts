import mongoose, { Document, Schema } from 'mongoose';
import { IUrl } from './url';
import { IUser } from './user';

// Interface for Analytics model
export interface IAnalytics extends Document {
  url: IUrl['_id'];
  user: IUser['_id'];
  ipAddress: string;
  timestamp: Date;
}

// Schema for Analytics model
const analyticsSchema: Schema = new Schema({
  url: {
    type: Schema.Types.ObjectId,
    ref: 'Url',
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  ipAddress: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Analytics model
export const Analytics = mongoose.model<IAnalytics>(
  'Analytics',
  analyticsSchema
);

export default Analytics;

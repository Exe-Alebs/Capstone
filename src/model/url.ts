import mongoose, { Document, Schema } from 'mongoose';

export interface IUrl extends Document {
  Longurl: string;
  urlCode: string;
  shortUrl: string;
  date: Date;
}

const urlSchema: Schema = new Schema({
  Longurl: {
    type: String,
    required: true,
  },
  urlCode: String,
  shortUrl: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IUrl>('Url', urlSchema);

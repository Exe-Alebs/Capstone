import mongoose, { Document, Schema } from 'mongoose';

export interface IUrl extends Document {
  longUrl: string;
  urlCode: string;
  shortUrl: string;
  date: Date;
  clicks: number;
}

const urlSchema: Schema = new Schema({
  longUrl: {
    type: String,
    required: true,
  },
  urlCode: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  clicks: {
    type: Number,
    default: 0,
  },
});

const Url = mongoose.model<IUrl>('Url', urlSchema);

export default Url;

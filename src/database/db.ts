//connect to mongodb data

const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_DB_URL = process.env.MONGO_DB_URL;

//connect to mongodb data
const connectToMongoDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB...');
  } catch (err) {
    console.log(err);
  }
};

export default connectToMongoDB;

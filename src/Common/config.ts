require('dotenv').config();
const MONGO_DB_URL = process.env.MONGO_DB_URL;
const PORT = process.env.PORT;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;

export { MONGO_DB_URL, PORT, MONGO_DB_NAME };

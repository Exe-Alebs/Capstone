import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import connectToMongoDB from './database/db';
import { config } from 'dotenv';
import router from './Routes/routes';
config();
require('dotenv').config();

const app: Express = express();
const PORT: string | number = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT} ⚡`);
});

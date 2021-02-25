import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {createConnection} from "typeorm";
import { ProductRoute } from './routes/product';
import { BaseRoute } from './routes/base';

const app: express.Application = express();
const port: Number = 3000;
const routes: Array<BaseRoute> = [];
const databaseConnection = createConnection();

app.use(cors());
app.use(bodyParser.json());

databaseConnection.then(() => {
  console.log('Connect to database successfully!');
  routes.push(new ProductRoute(app));
})

app.listen(port, () => {
  routes.forEach((route) => {
    console.log(`Init '${route.getName()}' success.`);
  });
  console.log('Server start successfully');
});
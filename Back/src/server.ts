import { Request, Response, Application } from 'express';
// import bodyParser from 'body-parser';
import categoriesRoute from './routes/categories.route';
import ordersRoute from './routes/orders.route';
import usersRoute from './routes/users.route';
import productsRoute from './routes/products.route';

const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const port = 3550;
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`);
});

app.use('/category', categoriesRoute);
app.use('/order', ordersRoute);
app.use('/user', usersRoute);
app.use('/product', productsRoute);

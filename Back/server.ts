import categoriesRoute from './src/routes/categories.route';
import ordersRoute from './src/routes/orders.route';
import usersRoute from './src/routes/users.route';
import productsRoute from './src/routes/products.route';

const express = require('express');

const app: Application = express();
const port = 3000;

app.get('/', (req: Request, res: { send: (arg0: string) => Response }) => {
  res.send('Hello World!');
});

app.post('/', (req: any, res: { send: (arg0: string) => void }) => {
  res.send('Je suis une requête POST');
});

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`);
});

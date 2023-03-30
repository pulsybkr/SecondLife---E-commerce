import sequelize from './instance';

import User from './models/User';
import Product from './models/Product';
import Category from './models/Category';
import Order from './models/Order';

async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

async function migrate() {
  await Order.sync({ force: true });
  console.log('The table for the Order model was just created!');

  await User.sync({ force: true });
  console.log('The table for the User model was just created!');

  await Category.sync({ force: true });
  console.log('The table for the Category model was just created!');

  await Product.sync({ force: true });
  console.log('The table for the Product model was just created!');
}

connect();

migrate();

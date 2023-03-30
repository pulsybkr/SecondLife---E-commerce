import sequelize from '../instance';
import User from './User';
import Product from './Product';

const { Sequelize, DataTypes } = require('sequelize');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,

  },
}, { sequelize });

Order.hasMany(User);
User.belongsTo(Order);

Order.belongsToMany(
  Product,
  {
    through: 'Order_Product',
  },
);

Product.belongsToMany(
  Order,
  {
    through: 'Order_Product',
  },
);

export default Order;

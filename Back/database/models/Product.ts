import sequelize from '../instance';

const { Sequelize, DataTypes } = require('sequelize');

const Product = sequelize.define('Product', {
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
  price: {
    type: DataTypes.FLOAT,
    allowNull: true,

  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image1: {
    type: DataTypes.STRING,
  },
  image2: {
    type: DataTypes.STRING,
  },
  image3: {
    type: DataTypes.STRING,
  },
  image4: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
  amount: {
    type: DataTypes.INTEGER,
  },
  capacity: {
    type: DataTypes.INTEGER,
  },
  condition: {
    type: DataTypes.INTEGER,
  },
  marque: {
    type: DataTypes.INTEGER,
  },
  categories_id: {
    type: DataTypes.INTEGER,
  },

}, { sequelize });

export default Product;

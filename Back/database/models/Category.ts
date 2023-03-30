import sequelize from '../instance';
import Product from './Product';

const { Sequelize, DataTypes } = require('sequelize');

const Category = sequelize.define('Category', {
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

Category.hasMany(Product);
Product.belongsTo(Category);

export default Category;

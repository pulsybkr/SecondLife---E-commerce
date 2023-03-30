import sequelize from '../instance';

const { Sequelize, DataTypes } = require('sequelize');

const User = sequelize.define('User', {
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
  password: {
    type: DataTypes.STRING,
    allowNull: true,

  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone_number: {
    type: DataTypes.INTEGER,
  },
}, { sequelize });

export default User;

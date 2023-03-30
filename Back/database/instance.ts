import * as dotenv from 'dotenv';

const { Sequelize, DataTypes } = require('sequelize');

dotenv.config({ path: 'C:\\Users\\pulsy\\Videos\\ETNA\\projet en cours\\group-990938\\.env' });

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mariadb',
  },
);

export default sequelize;

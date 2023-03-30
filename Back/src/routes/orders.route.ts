import {
  getAll, getById, create, updateById, deleteById,
} from '../controllers/orders.controller';

const express = require('express');

const ordersRoute = express.Router();

// get all
ordersRoute.get('/', getAll);

// get one
ordersRoute.get('/:id', getById);

// post
ordersRoute.post('/', create);

// patch
ordersRoute.patch('/:id', updateById);

// delette
ordersRoute.delete('/:id', deleteById);

export default ordersRoute;

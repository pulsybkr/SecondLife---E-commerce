import {
  getAll, getById, create, updateById, deleteById,
} from '../controllers/categories.controller';

const express = require('express');

const categoriesRoute = express.Router();

// get all
categoriesRoute.get('/', getAll);

// get one
categoriesRoute.get('/:id', getById);

// post
categoriesRoute.post('/', create);

// patch
categoriesRoute.patch('/:id', updateById);

// delette
categoriesRoute.delete('/:id', deleteById);

export default categoriesRoute;

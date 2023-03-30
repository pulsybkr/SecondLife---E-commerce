import {
  getAll, getById, create, updateById, deleteById, getByIdCategory,
} from '../controllers/products.controller';

const express = require('express');

const productsRoute = express.Router();

// get all
productsRoute.get('/', getAll);

// get one
productsRoute.get('/:id', getById);

// create
productsRoute.get('/byCategories/:categories_id', getByIdCategory);

// post
productsRoute.post('/', create);

// patch
productsRoute.patch('/:id', updateById);

// delette
productsRoute.delete('/:id', deleteById);

export default productsRoute;

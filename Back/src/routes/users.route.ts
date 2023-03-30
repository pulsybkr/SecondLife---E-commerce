import {
  getAll, getById, create, updateById, deleteById,
} from '../controllers/users.controller';

const express = require('express');

const usersRoute = express.Router();

// get all
usersRoute.get('/', getAll);

// get one
usersRoute.get('/:id', getById);

// post
usersRoute.post('/', create);

// usersRoute.post('/auth/', login);

// patch
usersRoute.patch('/:id', updateById);

// delette
usersRoute.delete('/:id', deleteById);

export default usersRoute;

import { Request, Response } from 'express';
import { createCateory, updateCateory, deleteCateory } from '../services/category.service';
import Category from '../../database/models/Category';

// get all
async function getAll(req: Request, res: Response) {
  const category = await Category.findAll();
  res.send(JSON.stringify(category, null, 2));
}

// get by id
async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const category = await Category.findAll({
    where: {
      id,
    },
  });
  res.send(JSON.stringify(category, null, 2));
}

// create
async function create(req: Request, res: Response) {
  try {
    await createCateory(req, res);
  } catch (error) {
    res.send('error');
  }
}

// update by id
async function updateById(req: Request, res: Response) {
  try {
    await updateCateory(req, res);
  } catch (error) {
    res.send('error !');
  }
}

async function deleteById(req: Request, res: Response) {
  try {
    await deleteCateory(req, res);
    // res.send("200 OK")
  } catch (error) {
    res.send('error 200');
  }
}

export {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};

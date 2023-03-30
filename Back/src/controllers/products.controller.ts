import { Request, Response } from 'express';
import { createProduct, updateProduct, deleteProduct } from '../services/product.service';
import Product from '../../database/models/Product';

// get all
async function getAll(req: Request, res: Response) {
  const products = await Product.findAll();
  res.send(JSON.stringify(products, null, 2));
}

// get by id

async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const products = await Product.findAll({
    where: {
      id,
    },
  });
  res.send(JSON.stringify(products, null, 2));
}

// get by Id Category
async function getByIdCategory(req: Request, res: Response) {
  const id = req.params.categories_id;
  const products = await Product.findAll({
    where: {
      categories_id: id,
    },
  });
  res.send(JSON.stringify(products, null, 2));
}

// create
async function create(req: Request, res: Response) {
  try {
    await createProduct(req, res);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}

// update by id
async function updateById(req: Request, res: Response) {
  try {
    await updateProduct(req, res);
  } catch (error) {
    res.send('error !');
  }
}

async function deleteById(req: Request, res: Response) {
  try {
    await deleteProduct(req, res);
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
  getByIdCategory,
};

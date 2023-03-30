import { Request, Response } from 'express';
import Product from '../../database/models/Product';

async function createProduct(req: Request, res: Response) {
  try {
    const products = await Product.create(req.body);
    res.send(JSON.stringify(products, null, 2));
  } catch (error) {
    res.send(error);
  }
}

// update by id
async function updateProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const products = await Product.update(
      req.query,
      {
        where: {
          id,
        },
      },
    );
    res.send(JSON.stringify(products, null, 2));
  } catch (error) {
    res.send('error ! ');
  }
}

async function deleteProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await Product.destroy({
      where: {
        id,
      },
    });
    res.send('200 OK');
  } catch (error) {
    res.send('error 200');
  }
}

export {
  createProduct,
  updateProduct,
  deleteProduct,
};

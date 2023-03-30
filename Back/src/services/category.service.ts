import { Request, Response } from 'express';
import Category from '../../database/models/Category';

async function createCateory(req: Request, res: Response) {
  try {
    const categories = await Category.create(req.query);
    res.send(JSON.stringify(categories, null, 2));
  } catch (error) {
    res.send('error');
  }
}

// update by id
async function updateCateory(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const categories = await Category.update(
      req.query,
      {
        where: {
          id,
        },
      },
    );
    res.send(JSON.stringify(categories, null, 2));
  } catch (error) {
    res.send('error ! ');
  }
}

async function deleteCateory(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await Category.destroy({
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
  createCateory,
  updateCateory,
  deleteCateory,
};

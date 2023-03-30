import { Request, Response } from 'express';
import { createOrder, updateOrder, deleteOrder } from '../services/order.service';
import Order from '../../database/models/Order';

// get all
async function getAll(req: Request, res: Response) {
  const order = await Order.findAll();
  res.send(JSON.stringify(order, null, 2));
}

// get by id
async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const order = await Order.findAll({
    where: {
      id,
    },
  });
  res.send(JSON.stringify(order, null, 2));
}

// create
async function create(req: Request, res: Response) {
  try {
    await createOrder(req, res);
  } catch (error) {
    res.send('error');
  }
}

// update by id
async function updateById(req: Request, res: Response) {
  try {
    await updateOrder(req, res);
  } catch (error) {
    res.send('error !');
  }
}

async function deleteById(req: Request, res: Response) {
  try {
    await deleteOrder(req, res);
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

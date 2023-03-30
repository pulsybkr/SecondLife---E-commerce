import { Request, Response } from 'express';
import Order from '../../database/models/Order';

async function createOrder(req: Request, res: Response) {
  try {
    const orders = await Order.create(req.query);
    res.send(JSON.stringify(orders, null, 2));
  } catch (error) {
    res.send('error');
  }
}

// update by id
async function updateOrder(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const orders = await Order.update(
      req.query,
      {
        where: {
          id,
        },
      },
    );
    res.send(JSON.stringify(orders, null, 2));
  } catch (error) {
    res.send('error ! ');
  }
}

async function deleteOrder(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await Order.destroy({
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
  createOrder,
  updateOrder,
  deleteOrder,
};

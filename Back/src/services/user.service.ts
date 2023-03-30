import { Request, Response } from 'express';
import User from '../../database/models/User';

async function createUser(req: Request, res: Response) {
  try {
    const users = await User.create(req.query);
    res.send(JSON.stringify(users, null, 2));
  } catch (error) {
    res.send('User not create');
    console.log(error);
  }
}

// update by id
async function updateUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const users = await User.update(
      req.query,
      {
        where: {
          id,
        },
      },
    );
    res.send(JSON.stringify(users, null, 2));
  } catch (error) {
    res.send('error ! ');
  }
}

async function deleteUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await User.destroy({
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
  createUser,
  updateUser,
  deleteUser,
};

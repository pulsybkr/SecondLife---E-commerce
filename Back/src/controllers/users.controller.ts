import { Request, Response } from 'express';
import { createUser, updateUser, deleteUser } from '../services/user.service';
import User from '../../database/models/User';

const jwt = require('jsonwebtoken');
// const bodyParser = require('body-parser');

// get all
async function getAll(req: Request, res: Response) {
  const user = await User.findAll();
  res.send(JSON.stringify(user, null, 2));
}

// get by id
async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const user = await User.findAll({
    where: {
      id,
    },
  });
  res.send(JSON.stringify(user, null, 2));
}

// create

// async function register(req: Request, res: Response) {
//   try {
//     const nameUser = await User.findOne({ where: {name: req.body.name}})
//     if (nameUser===null) {
//       const newUser = await User.create(req.body);
//       res.send(JSON.stringify(newUser));
//       console.log(JSON.stringify(newUser))
//     }else{
//       res.send('user already exists');
//       console.log('user already exists')
//     }
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// }
async function create(req: Request, res: Response) {
  try {
    await createUser(req, res);
  } catch (error) {
    res.send('error !');
  }
}
// login
// async function login(req: Request, res: Response) {
//   const { name, password } = req.body;

//   const user = await User.findOne({
//     where: { name, password },
//   });

//   if (user !== null) {
//     const accessToken = jwt.sign({ name, password }, process.env.ACESS_TOKEN, { expiresIn: '1days' });

//     res.json({ accessToken });

//     // res.json(accessToken)
//     // res.json({accessToken});
//   } else {
//     res.send('Not connected');
//   }
// }

// update by id
async function updateById(req: Request, res: Response) {
  try {
    await updateUser(req, res);
  } catch (error) {
    res.send('error !');
  }
}

// delete by id
async function deleteById(req: Request, res: Response) {
  try {
    await deleteUser(req, res);
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

import express from 'express';
import { UserModel } from 'models/users';

export const getUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch(err) {
    res.status(500).json(err);
  }
}
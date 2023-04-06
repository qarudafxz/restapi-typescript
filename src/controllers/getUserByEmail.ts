import express from 'express';
import { UserModel } from 'models/users';

export const getUserByEmail = async (req: express.Request, res: express.Response) => {
  const { email } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    res.status(200).json(user);
  } catch(err) {
    res.status(404).json(err);
  }
}
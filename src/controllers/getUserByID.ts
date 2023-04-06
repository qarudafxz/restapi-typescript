import express from 'express';

import { UserModel } from 'models/users';

export const getUserByID = async (req: express.Request, res: express.Response) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).json(user);
  } catch(err) {
    res.status(404).json(err);
  }
}
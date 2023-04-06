import express from 'express';

import { UserModel } from 'models/users';

export const getUserBySessionToken = async (req: express.Request, res: express.Response) => {
  try {
    const user = await UserModel.findOne({ 'authentication.sessionToken': req.body.sessionToken });
    res.status(200).json(user);
  } catch(err) {
    res.status(404).json(err);
  }
}
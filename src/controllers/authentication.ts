import express from 'express';
import bcrypt from 'bcrypt'

import { UserModel } from '../models/users.ts';

export const login = async(req: express.Request, res: express.Response) => {
  try {
    const { username, password } = req.body;
    if(!username || !password) {
      throw new Error('Username and password are required');
    }

    const user = await UserModel.findOne({ username });
    if(!user) return res.status(404).json({ message: 'User not found' });

    const isMatch: boolean = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(404).json({ message: 'Username or password incorrect!'});
    res.status(200).json({ user, message: 'Login successful' });
  } catch(err) {
    console.log(err);
  }
}
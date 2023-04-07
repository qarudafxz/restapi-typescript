import express from 'express';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/users.ts';

export const createUser = async (req: express.Request, res: express.Response) => {
  const { firstName, lastName, email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if(user) return res.status(404).json({ message: "User already exist!" });
  const passRemoveWhite : string = password.replace(/\s/g, '');
  const hashedPassword: string = await bcrypt.hash(passRemoveWhite, 10);

  const newUser = new UserModel({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  })

  await newUser.save();
  res.status(201).json(newUser);
}
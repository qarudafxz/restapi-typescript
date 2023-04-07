import express from 'express';
import { UserModel } from 'models/users';

export const deleteUserById = async (req: express.Request, res: express.Response) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    if(!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  }catch(err) {
    res.status(500).json({ message: err.message });
  }
}
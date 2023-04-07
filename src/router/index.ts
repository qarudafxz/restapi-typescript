import express from 'express';
import { createUser } from '../controllers/createUser.ts';

const router = express.Router();


router.post('/signup', createUser);

export { router as authRouter };
import express from 'express';
import http from 'http';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { authRouter } from './router/index.ts';

dotenv.config();
const app = express();

const MONGO_URI: string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@restapi.dyyyhfe.mongodb.net/${process.env.MONGO_CLUSTER_NAME}?retryWrites=true&w=majority`

app.use(cors({
  credentials: true
}));

//middlewares
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRouter);

//creating a server using http
const server = http.createServer(app);
server.listen(8080, () => {
  console.log('Server is running on port 8080');
})

//annotating a type of Promise in mongoose method
mongoose.Promise = Promise;
mongoose.connect(MONGO_URI)

//checking if the connection on the database is successful or not
mongoose.connection.on('error', (error: Error) => console.log(error)); 
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));
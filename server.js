import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import accountGroupRouter from './routers/accountGroupRouter.js';
import accountRouter from './routers/accountRouter.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 const DATABASEURL =  process.env.SERVERDB;


mongoose .connect(DATABASEURL, { 
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useUnifiedTopology: true 
}) .then(() => console.log("MongoDB connected")) .catch((err) => console.log(err));



app.use('/api/users', userRouter);
app.use('/api/account', accountRouter);
app.use('/api/accountGroup', accountGroupRouter);

const port = process.env.PORT || 8080;


 app.listen(port, () => {
   console.log(`Serve at http://localhost:${port}`);
 });

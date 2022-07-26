import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import accountGroupRouter from './routers/accountGroupRouter.js';
import accountRouter from './routers/accountRouter.js';
import serviceRouter from './routers/serviceRouter.js';
import serviceGroupRouter from './routers/serviceGroupRouter.js';
import productRouter from './routers/productRouter.js';
import productGroupRouter from './routers/productGroupRouter.js';
import enquiryRouter from './routers/enquiryRouter.js';
import orderRouter from './routers/orderRouter.js';
import stateRouter from './routers/stateRouter.js';
import talukaRouter from './routers/talukaRouter.js';
import districtRouter from './routers/districtRouter.js';

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
app.use('/api/serviceGroup', serviceGroupRouter);
app.use('/api/services', serviceRouter);
app.use('/api/product', productRouter);
app.use('/api/productGroup', productGroupRouter);
app.use('/api/enquiry', enquiryRouter);
app.use('/api/order', orderRouter);
app.use('/api/state', stateRouter);
app.use('/api/district', districtRouter);
app.use('/api/taluka', talukaRouter);

const port = process.env.PORT || 8080;


 app.listen(port, () => {
   console.log(`Serve at http://localhost:${port}`);
 });

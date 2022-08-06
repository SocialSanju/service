import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { v4 as uuidv4 } from 'uuid'

const orderRouter = express.Router();

orderRouter.get('/all', expressAsyncHandler(async(req, res) => {
  const sample = await Order.find({});
  res.send(sample);
})
);

orderRouter.post('/add', expressAsyncHandler(async(req, res) => {
  const order = new Order({
    OrderID: uuidv4(),
    Name: req.body.Name,
    A: req.body.A,
    B: req.body.B,
    Product: req.body.Product,
    BillingAmt: req.body.BillingAmt,
    PaidAmt: req.body.PaidAmt,
    Remark: req.body.Remark
  });
  const createdOrder = await order.save();
  res.send({
    _id:  createdOrder._id,    
    OrderID:  createdOrder.OrderID,
    Name:  createdOrder.Name,
    Product: createdOrder.Product,
    BillingAmt: createdOrder.BillingAmt,
    PaidAmt: createdOrder.PaidAmt,
    Remark: createdOrder.Remark,
    State:  createdOrder.State,
    District:  createdOrder.District,
    Taluka:  createdOrder.Taluka
  });
})
);



export default orderRouter;
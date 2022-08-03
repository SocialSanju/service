import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

const orderRouter = express.Router();

orderRouter.get('/all', expressAsyncHandler(async(req, res) => {
  const sample = await Order.find({});
  res.send(sample);
})
);

orderRouter.post('/add', expressAsyncHandler(async(req, res) => {
  const order = new Order({
    Name: req.body.Name,
  });
  const createdOrder = await order.save();
  res.send({
    _id:  createdOrder._id,    
    Name:  createdOrder.Name,
  });
})
);



export default orderRouter;
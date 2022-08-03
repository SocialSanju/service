import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import { v4 as uuidv4 } from 'uuid'

const productRouter = express.Router();

productRouter.get('/all', expressAsyncHandler(async(req, res) => {
  const sample = await Product.find({});
  res.send(sample);
})
);

productRouter.post('/add', expressAsyncHandler(async(req, res) => {
  const product = new Product({
    ProductID: uuidv4(),
    Name: req.body.Name,
    ProductGroup: req.body.ProductGroup
  });
  const createdProduct = await product.save();
  res.send({
    _id:  createdProduct._id,    
    ProductID:  createdProduct.ProductID,
    Name:  createdProduct.Name,
    ProductGroup: createdProduct.ProductGroup
  });
})
);



export default productRouter;
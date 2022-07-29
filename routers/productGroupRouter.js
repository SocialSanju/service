import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import ProductGroup from '../models/productGroupModel.js';
import { v4 as uuidv4 } from 'uuid'

const productGroupRouter = express.Router();

productGroupRouter.get('/list', expressAsyncHandler(async(req, res) => {
  
    const group = await ProductGroup.find({});
    res.send(group);

})
);

productGroupRouter.post('/', expressAsyncHandler(async(req, res) => {
  const act = new ProductGroup({
    product_group_title: req.body.product_group_title,
    product_group_uuid: uuidv4(),
    Sub_Group: req.body.Sub_Group
  });
  const createdProductGroup = await act.save();
  res.send({
    _id:  createdProductGroup._id,
    product_group_title:  createdProductGroup.product_group_title,
    product_group_uuid: createdProductGroup.product_group_uuid,
    Sub_Group:  createdProductGroup.Sub_Group,
  });
})
);



export default productGroupRouter;
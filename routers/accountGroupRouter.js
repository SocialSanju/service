import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../utils.js';
import AccountGroup from '../models/accountGroupModel.js';

const accountGroupRouter = express.Router();

accountGroupRouter.post('/', expressAsyncHandler(async(req, res) => {
  const act = new AccountGroup({
    Name: req.body.Name,
    Sub_Group: req.body.Sub_Group
  });
  const createdAccountGroup = await act.save();
  res.send({
    _id:  createdAccountGroup._id,
    Name:  createdAccountGroup.Name,
    Sub_Group:  createdAccountGroup.Sub_Group,
    token: generateToken(createdAccountGroup),
  });
})
);



export default accountGroupRouter;
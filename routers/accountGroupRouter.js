import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import AccountGroup from '../models/accountGroupModel.js';
import { v4 as uuidv4 } from 'uuid'

const accountGroupRouter = express.Router();

accountGroupRouter.get('/list', expressAsyncHandler(async(req, res) => {
  const details = await AccountGroup.find({});
  res.send(details);
})
);

accountGroupRouter.post('/', expressAsyncHandler(async(req, res) => {
  const act = new AccountGroup({
    ac_group_title: req.body.ac_group_title,
    ac_group_uuid: uuidv4(),
    Sub_Group: req.body.Sub_Group
  });
  const createdAccountGroup = await act.save();
  res.send({
    _id:  createdAccountGroup._id,
    ac_group_title:  createdAccountGroup.ac_group_title,
    ac_group_uuid: createdAccountGroup.ac_group_uuid,
    Sub_Group:  createdAccountGroup.Sub_Group,
  });
})
);



export default accountGroupRouter;
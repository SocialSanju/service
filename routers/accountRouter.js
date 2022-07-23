import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Account from '../models/accountModel.js';
import { v4 as uuidv4 } from 'uuid'

const accountRouter = express.Router();

accountRouter.get('/all', expressAsyncHandler(async(req, res) => {
  const sample = await Account.find({});
  res.send(sample);
})
);

accountRouter.post('/add', expressAsyncHandler(async(req, res) => {
  const account = new Account({
    AccountID: uuidv4(),
    Name: req.body.Name,
    Mobile_No: req.body.Mobile_No,
    Ac_Group: req.body.Ac_Group
  });
  const createdAccount = await account.save();
  res.send({
    _id:  createdAccount._id,    
    AccountID:  createdAccount.AccountID,
    Name:  createdAccount.Name,
    Mobile_No:  createdAccount.Mobile_No,
    Ac_Group: createdAccount.Ac_Group
  });
})
);



export default accountRouter;
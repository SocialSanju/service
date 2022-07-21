import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../utils.js';
import Account from '../models/accountModel.js';
import AccountGroup from '../models/accountGroupModel.js';

const accountRouter = express.Router();

accountRouter.post('/', expressAsyncHandler(async(req, res) => {
  const account = new Account({
    Name: req.body.Name,
    Mobile_No: req.body.Mobile_No,
    Account_Group: req.AccountGroup._id
  });
  const createdAccount = await account.save();
  res.send({
    _id:  createdAccount._id,
    Name:  createdAccount.Name,
    Mobile_No:  createdAccount.Mobile_No,
    Account_Group:  createdAccount.Account_Group,
    token: generateToken(createdAccount),
  });
})
);



export default accountRouter;
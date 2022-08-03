import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Enquiry from '../models/enquiryModel.js';
import datetime from 'datetime';

const enquiryRouter = express.Router();

enquiryRouter.get('/all', expressAsyncHandler(async(req, res) => {
  const sample = await Enquiry.find({});
  res.send(sample);
})
);

enquiryRouter.post('/add', expressAsyncHandler(async(req, res) => {
  const enquiry = new Enquiry({
    EnqID: req.body.EnqID,
    Name: req.body.Name
  });
  const createdEnquiry = await enquiry.save();
  res.send({
    _id: createdEnquiry._id,
    EnqID: createdEnquiry.EnqID,
    Name: createdEnquiry.Name,
  });
})
);



export default enquiryRouter;
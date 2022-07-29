import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Service from '../models/serviceModel.js';
import { v4 as uuidv4 } from 'uuid';

const serviceRouter = express.Router();

serviceRouter.get('/', expressAsyncHandler(async(req, res) => {
  const sample = await Service.find({});
  res.send(sample);
})
);

serviceRouter.post('/add', expressAsyncHandler(async(req, res) => {
  const service = new Service({
    ServiceID: uuidv4(),
    Title: req.body.Title,
    Sort_Order: req.body.Sort_Order,
    Service_Group: req.body.Service_Group,
    Status: req.body.Status
  });
  const createdService = await service.save();
  res.send({
    _id:  createdService._id,
    ServiceID:  createdService.ServiceID,    
    Title:  createdService.Title,
    Sort_Order:  createdService.Sort_Order,
    Service_Group: createdService.Service_Group,
    Status: createdService.Status
  });
})
);



export default serviceRouter;
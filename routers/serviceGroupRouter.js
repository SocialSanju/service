import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import ServiceGroup from '../models/serviceGroupModel.js';
import { v4 as uuidv4 } from 'uuid'

const serviceGroupRouter = express.Router();

serviceGroupRouter.get('/list', expressAsyncHandler(async(req, res) => {
    const group = await ServiceGroup.find({});
    res.send(group);

})
);

serviceGroupRouter.post('/', expressAsyncHandler(async(req, res) => {
  const service = new ServiceGroup({
    service_group_title: req.body.service_group_title,
    service_group_uuid: uuidv4(),
    Sub_Group: req.body.Sub_Group
  });
  const createdServiceGroup = await service.save();
  res.send({
    _id:  createdServiceGroup._id,
    service_group_title:  createdServiceGroup.service_group_title,
    service_group_uuid: createdServiceGroup.service_group_uuid,
    Sub_Group:  createdServiceGroup.Sub_Group,
  });
})
);



export default serviceGroupRouter;
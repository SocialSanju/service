import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import District from '../models/districtModel.js';
import { v4 as uuidv4 } from 'uuid'

const districtRouter = express.Router();

districtRouter.get('/all', expressAsyncHandler(async(req, res) => {
  const sample = await District.find({});
  res.send(sample);
})
);

districtRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const district = await District.findById(req.params.id);     
    if (district) {
      res.send(district);
    } else {
      res.status(404).send({ message: 'District Not Found' });
    }
  })
);

districtRouter.post('/add', expressAsyncHandler(async(req, res) => {
  const district = new District({
    DID: uuidv4(),
    Name: req.body.Name,
    SID: req.body.SID,
  });
  const createdDistrict = await district.save();
  res.send({
    _id:  createdDistrict._id,  
    DID:   createdDistrict.DID,
    Name:  createdDistrict.Name,
    SID: createdDistrict.SID
  });
})
);

export default districtRouter;
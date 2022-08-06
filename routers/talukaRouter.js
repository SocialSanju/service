import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Taluka from '../models/talukaModel.js';
import { v4 as uuidv4 } from 'uuid'

const talukaRouter = express.Router();

talukaRouter.get('/all', expressAsyncHandler(async(req, res) => {
  const sample = await Taluka.find({});
  res.send(sample);
})
);

talukaRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const taluka = await Taluka.findById(req.params.id);     
    if (taluka) {
      res.send(taluka);
    } else {
      res.status(404).send({ message: 'District Not Found' });
    }
  })
);

talukaRouter.post('/add', expressAsyncHandler(async(req, res) => {
  const taluka = new Taluka({
    TID: uuidv4(),
    Name: req.body.Name,
    SID: req.body.SID,
    DID: req.body.DID
  });
  const createdTaluka = await taluka.save();
  res.send({
    _id:  createdTaluka._id, 
    TID: createdTaluka.TID, 
    Name: createdTaluka.Name,
    SID: createdTaluka.SID,
    DID:  createdTaluka.DI

  });
})
);

export default talukaRouter;
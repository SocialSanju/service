import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import State from '../models/stateModel.js';
import { v4 as uuidv4 } from 'uuid'

const stateRouter = express.Router();

stateRouter.get('/all', expressAsyncHandler(async(req, res) => {
  const sample = await State.find({});
  res.send(sample);
})
);

stateRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const state = await State.findById(req.params.id);     
    if (state) {
      res.send(state);
    } else {
      res.status(404).send({ message: 'State Not Found' });
    }
  })
);

stateRouter.post('/add', expressAsyncHandler(async(req, res) => {
  const state = new State({
    Name: req.body.Name,
    SID: uuidv4(),
  });
  const createdState = await state.save();
  res.send({
    _id:  createdState._id,    
    Name:  createdState.Name,
    SID: createdState.SID
  });
})
);

export default stateRouter;
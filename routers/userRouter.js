import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.post('/signin', expressAsyncHandler(async(req, res) => {
  const user = await User.findOne({ user_id: req.body.user_id });
  if(user) {
   
      res.send({
        _id: user._id,
        user_id: user.user_id,
        user_name: user.user_name,
        user_roll: user.user_roll,
      });
      return;
    
  }
  res.status(401).send({ message: 'Invalid Mobile no' });
})
);

userRouter.post(
  '/register',
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      user_name: req.body.user_name,
      user_id: req.body.user_id,
      user_roll: 'user',
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      user_name: createdUser.user_name,
      user_id: createdUser.user_id,
      user_roll: createdUser.user_roll,
    });
  })
);


userRouter.get('/:id', expressAsyncHandler(async(req, res) => {
  const user = await User.findById(req.params.id);
  if(user)
  {
    res.send(user)
  }
  else {
    res.status(404).send({ message: 'User Not Found' });
  }
})
);

userRouter.put(
  '/profile',
  expressAsyncHandler(async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (user) {
          const { user_id, user_name, user_roll } = req.body;
          user.user_name = user_name;
          user.user_id = user_id;
          user.user_roll = user_roll;     
          const updateUser = await user.save();
          res.json(updateUser);
      } else {
          res.send('user not found')
      }

  } catch (err) {
      res.send('error', err);
  }
  }
));


userRouter.get('/', expressAsyncHandler(async(req, res) => {
  const users = await User.find({});
  res.send(users);
})
);

userRouter.delete('/:id', expressAsyncHandler(async(req, res) => {
  const user = await User.findById(req.params.id)
  if(user) {
    if(user.user_id === '3633') {
      res.status(400).send({ message: 'Can not Delete Admin User' });
      return;
    }
    const deleteUser = await user.remove();
    res.send({ message: 'User Deleted', user: deleteUser });
  } else {
    res.status(404).send({ message: 'User Not Found' });
  }
})
);

userRouter.put('/:id', expressAsyncHandler(async(req, res) => {
  const user = await User.findById(req.params.id);
  if(user) {
    user.user_name = req.body.user_name || user.user_name;
    user.user_id = req.body.user_id || user.user_id;
    user.user_roll = req.body.user_roll || user.user_roll;
    const updateUser = await user.save();
    res.send({ message: 'User Updated' , user: updateUser });
  } else {
    res.status(404).send({ message: 'User not found' });
  }
})
);

export default userRouter;
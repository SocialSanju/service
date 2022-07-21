import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
{
   user_name: { type: String, required: true },
   user_id: { type: String, required: true, unique: true },
   user_roll: { type: String } 
}, 
   {
      timestamps: true,
   }
);
const User = mongoose.model('User', userSchema);
export default User;

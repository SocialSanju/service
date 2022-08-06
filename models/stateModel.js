import mongoose from 'mongoose';

const stateSchema = new mongoose.Schema(
{
   Name: { type: String, required: true },
   SID: { type: String },
}, 
   {
      timestamps: true,
   }
);
const State = mongoose.model('State', stateSchema);
export default State;

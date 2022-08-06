import mongoose from 'mongoose';

const talukaSchema = new mongoose.Schema(
{
   TID: { type: String },
   Name: { type: String, required: true },
   SID: { type: String, required: true },
   DID: { type: String, required: true }
}, 
   {
      timestamps: true,
   }
);
const Taluka = mongoose.model('Taluka', talukaSchema);
export default Taluka;

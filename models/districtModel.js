import mongoose from 'mongoose';

const districtSchema = new mongoose.Schema(
{
   DID: { type: String },
   Name: { type: String, required: true },
   SID: { type: String, required: true }  
}, 
   {
      timestamps: true,
   }
);
const District = mongoose.model('District', districtSchema);
export default District;

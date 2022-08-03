import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
{
   ServiceID: { type: String },
   Title: { type: String, required: true },
   Service_Group: {type: String},
}, 
   {
      timestamps: true,
   }
);
const Service = mongoose.model('Service', serviceSchema);
export default Service;

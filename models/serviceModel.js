import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
{
   ServiceID: { type: String },
   Title: { type: String, required: true },
   Sort_Order: { type: String, required: true },
   Service_Group: {type: String},
   Status: { type: Number, required: true },
}, 
   {
      timestamps: true,
   }
);
const Service = mongoose.model('Service', serviceSchema);
export default Service;

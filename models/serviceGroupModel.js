import mongoose from 'mongoose';

const serviceGroupSchema = new mongoose.Schema(
{
   service_group_title: { type: String, required: true },
   service_group_uuid: { type: String },
   Sub_Group: { type: String, required: true } 
}, 
   {
      timestamps: true,
   }
);
const ServiceGroup = mongoose.model('ServiceGroup', serviceGroupSchema);
export default ServiceGroup;

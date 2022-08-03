import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
{
   EnqID: { type: String },
   Name: { type: String, required: true }
}, 
   {
      timestamps: true,
   }
);
const Enquiry = mongoose.model('Enquiry', enquirySchema);
export default Enquiry;

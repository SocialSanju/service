import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema(
{
   AccountID: { type: String },
   Name: { type: String, required: true },
   Mobile_No: { type: Number, required: true },
   Ac_Group: {type: String}
}, 
   {
      timestamps: true,
   }
);
const Account = mongoose.model('Account', accountSchema);
export default Account;

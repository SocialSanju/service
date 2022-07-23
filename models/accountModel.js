import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema(
{
   AccountID: { type: String },
   Name: { type: String, required: true },
   Mobile_No: { type: Number, required: true, unique: true },
   Ac_Group: {type: String, required: true}
}, 
   {
      timestamps: true,
   }
);
const Account = mongoose.model('Account', accountSchema);
export default Account;

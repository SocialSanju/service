import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema(
{
   Name: { type: String, required: true },
   Mobile_No: { type: Number, required: true, unique: true },
   Account_Group: { type: mongoose.Schema.Types.ObjectID, ref: 'AccountGroup' } 
}, 
   {
      timestamps: true,
   }
);
const Account = mongoose.model('Account', accountSchema);
export default Account;

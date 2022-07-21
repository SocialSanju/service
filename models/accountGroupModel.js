import mongoose from 'mongoose';

const accountGroupSchema = new mongoose.Schema(
{
   Name: { type: String, required: true },
   Sub_Group: { type: String, required: true } 
}, 
   {
      timestamps: true,
   }
);
const AccountGroup = mongoose.model('AccountGroup', accountGroupSchema);
export default AccountGroup;

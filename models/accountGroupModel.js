import mongoose from 'mongoose';

const accountGroupSchema = new mongoose.Schema(
{
   ac_group_title: { type: String, required: true },
   ac_group_uuid: { type: String },
   Sub_Group: { type: String, required: true } 
}, 
   {
      timestamps: true,
   }
);
const AccountGroup = mongoose.model('AccountGroup', accountGroupSchema);
export default AccountGroup;

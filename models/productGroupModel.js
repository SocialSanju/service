import mongoose from 'mongoose';

const ProductGroupSchema = new mongoose.Schema(
{
   product_group_title: { type: String, required: true },
   product_group_uuid: { type: String },
   Sub_Group: { type: String, required: true } 
}, 
   {
      timestamps: true,
   }
);
const ProductGroup = mongoose.model('ProductGroup', ProductGroupSchema);
export default ProductGroup;

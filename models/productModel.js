import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
{
   ProductID: { type: String },
   Name: { type: String, required: true },
   ProductGroup: {type: String}
}, 
   {
      timestamps: true,
   }
);
const Product = mongoose.model('Product', productSchema);
export default Product;

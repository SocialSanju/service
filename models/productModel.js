import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
{
   ProductID: { type: String },
   Name: { type: String, required: true },
   Mobile_No: { type: Number, required: true, unique: true },
   ProductGroup: {type: String}
}, 
   {
      timestamps: true,
   }
);
const Product = mongoose.model('Product', productSchema);
export default Product;

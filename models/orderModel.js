import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
{
   Name: { type: String, required: true },
   Mobile_No: { type: Number, required: true, unique: true },
}, 
   {
      timestamps: true,
   }
);
const Order = mongoose.model('Order', orderSchema);
export default Order;

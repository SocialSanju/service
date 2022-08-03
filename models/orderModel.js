import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
{
   Name: { type: String, required: true },
}, 
   {
      timestamps: true,
   }
);
const Order = mongoose.model('Order', orderSchema);
export default Order;

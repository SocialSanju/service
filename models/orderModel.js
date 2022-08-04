import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
{
   OrderID: { type: String },
   Name: { type: String, required: true },
   A: { type: String, required: true },
   B: { type: String, required: true },
   C: { type: String, required: true },
   Product: {type: String, required: true},
   BillingAmt: {type: String, required: true},
   PaidAmt: {type: String, required: true},
   Remark: {type: String, required: true}
}, 
   {
      timestamps: true,
   }
);
const Order = mongoose.model('Order', orderSchema);
export default Order;

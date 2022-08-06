import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
{
   OrderID: { type: String },
   Name: { type: String, required: true },
   Product: {type: String, required: true},
   BillingAmt: {type: String, required: true},
   PaidAmt: {type: String, required: true},
   Remark: {type: String, required: true},
   State: { type: String, required: true },
   District: { type: String, required: true },
   Taluka: { type: String, required: true },
  
}, 
   {
      timestamps: true,
   }
);
const Order = mongoose.model('Order', orderSchema);
export default Order;

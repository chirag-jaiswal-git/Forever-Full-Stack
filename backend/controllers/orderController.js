import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';


//Placing order using COD method

const placeOrder = async(req,res)=>{
try {
const {items,amount,address} = req.body;
const userId = req.userId;

  const orderData = {
    userId,
    items,
    amount,
    address,
    paymentMethod:'COD',
    payment:false,
    date:Date.now()
  }
  const newOrder = new orderModel(orderData);
  await newOrder.save();

  await userModel.findByIdAndUpdate(userId,{cartData:{}})
  res.status(200).json({success:true,message:'Order placed successfully',order:newOrder})

} catch (error) {
  res.json({success:false,message:'Not authorized Login again',error:error.message})
}
}


//All Orders data for admin panel
const allOrders = async(req,res)=>{
  try {
    const orders = await orderModel.find({});
    res.status(200).json({success:true,orders})
  } catch (error) {
    console.log(error);
    res.status(500).json({success:false,message:'Error fetching orders',error:error.message})
  }


}

//User Order Data for frontend
const userOrders = async(req,res)=>{
try {
   const userId = req.userId;
  const orders = await orderModel.find({userId});
  res.status(200).json({success:true,orders})
} catch (error) {
  console.log(error);
  res.status(500).json({success:false,message:'Error fetching orders',error:error.message})
}
}

//update order status from Admin panel
const updateStatus = async(req,res)=>{
try {  
  const {orderID,status} = req.body;
  await orderModel.findByIdAndUpdate(orderID,{status})
  res.status(200).json({success:true,message:'Order status updated successfully'})
}
  catch (error) {
  console.log(error);
  res.status(500).json({success:false,message:'Error updating order status',error:error.message})
}
}

export {placeOrder,allOrders,userOrders,updateStatus}
import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    productID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Products'
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    status : {
        type : String,
        default : 'ordered'
    }
});

const Order = mongoose.model('Orders',orderSchema);
export default Order;
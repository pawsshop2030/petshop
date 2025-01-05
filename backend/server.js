import express from 'express'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cloudinary from 'cloudinary'
import cors from 'cors'

// user defined
import connectDB from './db/connectDB.js';
import authRoute from './routes/auth_route.js'
import productRoute from './routes/product_route.js'
import orderRoute from './routes/order_route.js'
import userRoute from './routes/user_route.js'



const app = express();

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_NAME,
    cloud_key : process.env.CLOUDINARY_KEY,
    cloud_secret : process.env.CLOUDINARY_SECRET,
})

app.use(cors({
    origin : 'http://localhost:3000',
    credentials : true
}))

dotenv.config();
app.use(express.urlencoded({
    extended : true
}))

app.use(express.json({
    limit : '1mb'
}))

app.use(cookieParser())

// ROUTES
app.use('/api/auth',authRoute)
app.use('/api/admin/product',productRoute)
app.use('/api/user',userRoute)
app.use('/api/order', orderRoute)

const PORT = process.env.PORT
app.listen(PORT ,() =>{ 
    connectDB()
    console.log('server on : ',PORT);
} )

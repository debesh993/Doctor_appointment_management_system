import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'
import ConnectDb from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
dotenv.config()
ConnectDb()
connectCloudinary()
const app=express();
app.use(cors({
    origin:"*",
    credentials:true
}))
const port=process.env.PORT ||4000
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api/admin',adminRouter)///api/admin/add-doctor
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}/`)
})
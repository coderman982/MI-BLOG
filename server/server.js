import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/db.js';

const app=express();

await connectDB //it await connectDb to complete

//middlewares
app.use(cors())//it will connect backend to frontend
app.use(express.json())//all requests will be parsed in json method

app.get('/', (req,res) => res.send("Sever is working"))

const PORT= process.env.PORT || 3000;//it means if 3000 port or port from .env file

app.listen(PORT,()=>{
    console.log("server is running")
})

//it will run port of 3000
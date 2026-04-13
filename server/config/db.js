import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        mongoose.connection.on('connected',()=> console.log("DATABASE CONNECTED"))
        await mongoose.connect(`${process.env.MONGO_URL}/MI-BLOG`)

    }

    catch(error){

        console.log(error.message)

    }
}

export default connectDB

//databse files should always be in a config folder which should be in server or backend folder
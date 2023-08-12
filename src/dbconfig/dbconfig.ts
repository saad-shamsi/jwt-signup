
import mongoose, { connection } from "mongoose";

export async function connect(process.env.MONGO_URI!) {
    cosnt connection = mongoose.connection
    connection.on(`connected`,()=>{
        console.log('MongDB connected successfully')
    })
    connection.on('error',(err)=>{
        
        console.log('MongoDB connecting error. Please make sure MongoDB is running',err)
        process.exit()
    })
    try {


        
    } catch (error) {
        console.log("something went wrong")
        console.log(error)
    }
}
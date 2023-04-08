import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';

const app = express()
const PORT = process.env.PORT || 3000 

// app.get('/',(req,res)=>{
//     res.send("Hello World")
// })

// connection server to mongoDB
const connectDB = async() => {
    try {
        mongoose.connect(process.env.DB_CONNECTION)
        console.log("MongoDB Connected")
    }catch{
        console.log(err.message)
        process.exit(1)
    }
}

app.listen(PORT, ()=>{
    connectDB();
    console.log(`PORT listing at ${PORT}`)
});
//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

import connectDB  from "./db/index.js";

dotenv.config({
    path:'./env'
})





connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is runnig at port ${process.env.PORT}`)
    })
    app.on("error",(err)=>{
        console.log("err:",err)
        throw console.error();;
    })
})
.catch((err)=>{
    console.log("mongo db connection failed !!",err)
})








// import express from "express";
// const app = express()



// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error:",(error)=>{
//             console.log("err:",error);
//             throw error;
//         });

//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on ${process.env.PORT}`)
//         })

//     }catch (error){
//        console.log("error:",error)
//        throw err
//     }

// })
// ()
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import {router} from './routes/allroutes.js'


dotenv.config();
const port = process.env.PORT || 8080
const mongoUri = process.env.MONGO_URI;

const app =express();

app.use(express.json());
app.use(cors());

// use router
app.use(router);



// connecting mongoose
 mongoose.connect(mongoUri).then(()=>{
    console.log("database is connected")
}).catch((error) => console.log(error))


app.listen(port, () =>{

    console.log(`Express server is running on ${port}`);
 
});
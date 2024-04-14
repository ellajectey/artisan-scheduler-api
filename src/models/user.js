import mongoose from "mongoose";

const schema = mongoose.Schema

const UserSchema = new schema({
    

    firstName: {type:String, required: true},
    lastName: {type:String, required:true},
    email: {type:String, required: true},
    password: {type:String, required: true},
    phoneNumber: {type:String, default: null},
    image: {type:String, default: null},
    location: {type:String, default: null},
    



})
export const userModel = mongoose.model("User",UserSchema)
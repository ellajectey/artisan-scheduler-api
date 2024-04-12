import mongoose from "mongoose";

const schema = mongoose.Schema

const ArtisanSchema = new schema({
    

    firstName: {type:String, required: true, lowercase: true},
    lastName: {type:String, required:true},
    title: {type:String, required:true},
    email: {type:String, required: true},
    password: {type:String, required: true},
    phoneNumber: {type:String, default: null},
    location: {type:String, default: null},
    category: {type:String, default: null},
    images: {
        image1: { type: String, default: null },
        image2: { type: String, default: null },
        image3: { type: String, default: null },
        image4: { type: String, default: null }
    },



})
export const artisanModel = mongoose.model("Artisan", ArtisanSchema)
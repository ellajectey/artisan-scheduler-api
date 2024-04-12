import mongoose from "mongoose";

const schema = mongoose.Schema

const RatingSchema = new schema({
    

    image: {type:String, default: null},
    email: {type:String, required: true},
    description: {type:String, default:null},
    rating: { type: Number, min: 1, max: 5, required: true }



})
export const ratingModel = mongoose.model("Rating", RatingSchema)
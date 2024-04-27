import mongoose from mongoose;

const schema = mongoose.Schema

const TopratedSchema = new schema({

    image: {type:String, required: true},
    firstName: {type:String, required: true},
    lastName: {type:String, required:true},
    job: {type:String, required:true},
    category: {type:String, default: null},
    location: {type:String, default: null},
    rating: { type: Number, min: 1, max: 5, required: true }


})
export const Topratedmodel = mongoose.model("Toprated",TopratedSchema);
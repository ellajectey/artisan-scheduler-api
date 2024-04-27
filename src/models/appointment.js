import mongoose from "mongoose";

const schema = mongoose.Schema

const AppointmentSchema = new schema({
    artisanId: {type:String, default: null, lowercase: true},
    artisanName: {type:String, default:null},
    email: {type:String, required: true},
    serviceType: {type:String, required:true},
    description: {type:String, default:null},
    selectedDate: {type:Date, required: true},
    selectedTime: {type:String, required: true},
    depositAmount: {type:Number, required: true},
})

export const appointmentModel = mongoose.model("Appointment", AppointmentSchema)
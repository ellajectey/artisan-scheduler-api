import { appointmentModel } from "../model/appointment.js";
import express from "express";

export const addAppointment = async (req,res) => {
    try {
        const data = req.body
        const addData = await appointmentModel.create(data)
        res.send(addData)

        console.log(data)
        res.send("add appointment")

    } catch (error) {
        console.log(error)
    }
}

export const getAllAppointments = async (req,res) => {
    try {
        
        const getAllAppointments = await appointmentModel.find({})
        res.send(getAllAppointments)

        console.log(data)
        res.send("all appointments")

    } catch (error) {
        console.log(error)
    }
}
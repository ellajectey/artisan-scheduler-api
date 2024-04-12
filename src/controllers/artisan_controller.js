import { artisanModel } from "../model/artisan.js";
import express from "express";
export const addArtisan = async (req,res) => {
    try {
        const data = req.body
        const addData = await artisanModel.create(data)
        res.send(addData)

        console.log(data)
        res.send("add rating")

    } catch (error) {
        console.log(error)
    }
}

export const getAllArtisans = async (req,res) => {
    try {
        
        const getAllArtisans = await artisanModel.find({})
        res.send(getAllArtisans)

        console.log(data)
        res.send("all artisans")

    } catch (error) {
        console.log(error)
    }
}
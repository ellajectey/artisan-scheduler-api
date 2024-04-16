import { artisanModel } from "../models/artisan.js";
import { tokenModel } from "../models/token.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
        const data = req.query
        const getAllArtisans = await artisanModel.find({})
        console.log(data)
        res.send(getAllArtisans)


    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Failed to get all users" });
    }
}


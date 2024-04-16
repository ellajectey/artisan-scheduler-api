import { artisanModel } from "../models/artisan.js";

export const addArtisan = async (req,res) => {
    try {
        const data = req.body
        const addData = await artisanModel.create(data)
        res.send(addData)

        console.log(data)
        res.send("add artisan")

    } catch (error) {
        console.log(error)
    }
}

export const getAllArtisans = async (req,res) => {
    try {
        const data = req.body
        const getAllArtisans = await artisanModel.find({});
    
        console.log(data);
        console.log(getAllArtisans);

        res.status(200).json(getAllArtisans)

       

    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Failed to get all users" });

    }
}


import { Topratedmodel } from "../models/toprated";

export const addTopRated= async (req,res) => {
    try {
        const data = req.body
        const addData = await Topratedmodel.create(data)
        res.send(addData)

        console.log(data)
        res.json("add topratedartisans")

    } catch (error) {
        console.log(error)
    }
}

export const getTopRated = async (req,res) => {
    try {
        
        const getTopRated = await Topratedmodel.find({})
        res.send(getTopRated)

        console.log(data)
        res.send("all topratedArtisans")

    } catch (error) {
        console.log(error)
    }
}
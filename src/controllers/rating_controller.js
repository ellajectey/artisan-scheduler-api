import { ratingModel } from "../models/rating.js";
import express from "express";
export const addRating = async (req,res) => {
    try {
        const data = req.body
        const addData = await ratingModel.create(data)
        res.send(addData)

        console.log(data)
        res.json("add rating")

    } catch (error) {
        console.log(error)
    }
}

export const getAllRatings = async (req,res) => {
    try {
        
        const getAllRatings = await ratingModel.find({})
        res.send(getAllRatings)

        console.log(data)
        res.send("all ratings")

    } catch (error) {
        console.log(error)
    }
}
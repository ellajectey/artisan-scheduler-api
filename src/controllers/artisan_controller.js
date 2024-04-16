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

//update specific user
export const updateArtisan = async (req, res) => {
    try {
        var query = {'email': req.body.formerEmail};
        console.log('body', req.body.update);

        let updateThisArtisan = await userModel.findOneAndUpdate(query, req.body.update, {upsert: true});
        console.log(updateThisArtisan)

        res.status(200).json({ message: "User successfully updated" });
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Failed to update user" });
    }
}

export const loginArtisan = async (req, res) => {
    try {
        //find user with provided email
        const loginArtisan = await artisanModel.findOne({ email: req.body.email });
        //check if user exists 
        if (!loginArtisan) {
            return res.status(404).json({ message: "Artisan not found" })
        }
        //compare password to hash password
        const correctPassword = await bcrypt.compare(req.body.password, loginArtisan.password)
        //check if password is correct
        if (!correctPassword) {
            return res.status(401).json({ message: "Invalid password" })
        }
        //generate access token for user
        const token = jwt.sign({
            _id: loginArtisan._id,
            firstName: loginArtisan.firstName,
            lastName: loginArtisan.lastName,
            email: loginArtisan.email
        }, secretKey, { expiresIn: "7d" })
        // save token in database
        await tokenModel.create({ accessToken: token });
        //return response
        res.json({
            accessToken: token,
            firstName: loginArtisan.firstName,
            lastName: loginArtisan.lastName,
            email: loginArtisan.email
        })

    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Failed to login" });
    }
}

//work on it
export const logoutArtisan = async (req, res) => {
    try {
        // wipe/delete token from database
        await tokenModel.deleteMany({ accessToken: req.token })
        //success message indicating the user has been logged out.
        res.status(200).json({ message: "User successfully logged out" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to logout" });
    }
}

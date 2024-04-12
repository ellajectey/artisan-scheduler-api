import { Router } from "express";
import { addUser,getAllUsers } from "../controllers/user_controller.js";
import { addArtisan,getAllArtisans } from "../controllers/artisan_controller.js";
import { addRating,getAllRatings } from "../controllers/rating_controller.js";
import { addAppointment,getAllAppointments } from "../controllers/appointment_controller.js";



export const router = Router()

// users
router.post("/add-user",addUser)
router.get("/get-users",getAllUsers)

// artisans
router.post("/add-artisan",addArtisan)
router.post("/get-artisans",getAllArtisans)

// ratings
router.get("/add-room",addRating)
router.get("/get-ratings",getAllRatings)

// appointments
router.get("/add-appointment",addAppointment)
router.get("/get-appointments",getAllAppointments)
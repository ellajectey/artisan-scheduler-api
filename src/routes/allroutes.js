import { Router } from "express";
import { addUser,getAllUsers,getSpecificUser,loginUser,logoutUser,updateUser } from "../controllers/user_controller.js";
import { addArtisan,getAllArtisans,loginArtisan,logoutArtisan,updateArtisan } from "../controllers/artisan_controller.js";
import { addRating,getAllRatings } from "../controllers/rating_controller.js";
import { addAppointment,getAllAppointments } from "../controllers/appointment_controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";



export const router = Router()

// users
router.post("/add-user",addUser)
router.get("/get-users",getAllUsers)
router.post('/login', loginUser)
router.post('/logout', authenticateToken, logoutUser);
router.patch('/user', authenticateToken, updateUser);
router.get('/users/:id', authenticateToken, getSpecificUser)


// artisans
router.post("/add-artisan",addArtisan)
router.get("/get-artisans",getAllArtisans)
router.post('/login-artisan', loginArtisan)
router.post('/logout-artisan', authenticateToken, logoutArtisan);
router.patch('/artisan', authenticateToken, updateArtisan);

// ratings
router.get("/add-rating",addRating)
router.get("/get-ratings",getAllRatings)

// appointments
router.get("/add-appointment",addAppointment)
router.get("/get-appointments",getAllAppointments)
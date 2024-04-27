import { Router } from "express";
import { addUser,getAllUsers,getSpecificUser,loginUser,logoutUser,updateUser } from "../controllers/user_controller.js";
import { addArtisan,getAllArtisans,loginArtisan,logoutArtisan,updateArtisan } from "../controllers/artisan_controller.js";
import { addRating,getAllRatings } from "../controllers/rating_controller.js";
import { addAppointment,getAllAppointments } from "../controllers/appointment_controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";
import { addTopRated,getTopRated } from "../controllers/toprated_controller.js";



export const router = Router()

// users
router.post("/add-user",addUser);
router.get("/get-users",getAllUsers);
router.post('/login', loginUser);
router.post('/logout', authenticateToken, logoutUser);
router.patch('/user', authenticateToken, updateUser);
router.get('/users/:id', authenticateToken, getSpecificUser);

//toprated
router.post("/add-toprated",addTopRated);
router.get("/get-toprated",getTopRated);


// artisans
router.post("/add-artisan",addArtisan);
router.get("/get-artisans",getAllArtisans);
router.post('/login-artisan', loginArtisan);
router.post('/logout-artisan', authenticateToken, logoutArtisan);
router.patch('/artisan', authenticateToken, updateArtisan);


// ratings
router.post("/add-rating",addRating)
router.get("/get-ratings",getAllRatings)

// appointments
router.post("/add-appointment",addAppointment)
router.get("/get-appointments",getAllAppointments)
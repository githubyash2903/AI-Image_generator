
import express from 'express';
import {registerUser, loginUser, userCredits} from '../controllers/userController.js';
import userAuth from '../middlewares/auth.js';


const userRouter = express.Router();


// User registration route
userRouter.post('/register', registerUser);
// User login route
userRouter.post('/login', loginUser); 
// User credits route
userRouter.post('/credits', userAuth, userCredits); 
// userRouter.route("/credits").get(userAuth, userCredits);

// userRouter.post('/pay-razor', userAuth, paymentRazorpay); 

// Export the user router
export default userRouter;

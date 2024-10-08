import { Router } from "express";
import { getAllemail, getAllUsers, getUser, logIn, logout, signUp } from "../controllers/user-model.js";
import { checkUserAuth } from "../middleware/auth.js";


export const userRouter = Router();

userRouter.post('/user/auth/signUp', signUp);

userRouter.post('/user/auth/logIn', logIn);

userRouter.get('/user/auth/signUp', getUser);

userRouter.get('/user/auth/:userName', getAllUsers);

userRouter.get('/user/auth/:email', getAllemail);

userRouter.post('/user/auth/logout', checkUserAuth, logout);

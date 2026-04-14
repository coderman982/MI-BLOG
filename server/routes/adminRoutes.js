//route for adminController as after login route for user


import express from "express";
import adminLogin from "../controllers/adminController.js";

const adminRouter=express.Router;

adminRouter.post("/login",adminLogin);// whenever we hit /login endpoint it execute adminlogin.js file

export default adminRouter;



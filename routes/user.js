// const express = require("express");
// const Router = express.Router();
const {Router} = require("express");
const {userModel} = require("../db"); // Assuming you have a user model defined in your db module
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD="asdsdf"
const userRouter = Router();

userRouter.post("/signup",async function (req, res)  {
    const {email,password,firstName,lastName}= req.body;

    try{
   await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })
} catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
    res.json({
        message: "User signed up successfully"
    })
})

userRouter.post("/signin", async function (req, res) {
    // Here you would typically check the user's credentials against a database
   const {email,password} = req.body;
   const user = await userModel.find({

   })
   
    res.json({
        message: "User logged in successfully"
    })
})

userRouter.get("/purchases",function(req, res) {
    res.json({
        message: "List of user purchases"
    })
})

module.exports = {
    userRouter: userRouter
}
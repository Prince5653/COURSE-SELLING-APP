// const express = require("express");
// const Router = express.Router();
const {Router} = require("express");

const userRouter = Router();

userRouter.post("/signup",function (req, res)  {
    res.json({
        message: "User signed up successfully"
    })
})

userRouter.post("/signin", function (req, res) {
    // Here you would typically check the user's credentials against a database
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
const {Router} = require ("express");
const adminRouter = Router();
const {adminModel} = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config"); // Assuming you have a config file for JWT secret

adminRouter.post("/signup", async function(req,res){
    const {email,password,firstName,lastName}= req.body;

    try{
   await adminModel.create({
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
        message: "Admin signed up successfully"
    })
})
 
    adminRouter.post("/signin", async function(req, res) {
        // Here you would typically check the admin's credentials against a database
       const {email,password} = req.body;
   const admin = await adminModel.findOne({
         email: email,
         password: password
   })
   if(admin) {
       const token = jwt.sign({
        id: admin._id
       }, JWT_ADMIN_PASSWORD);
           
       res.json({
        token: token})
   } else {
       return res.status(401).json({
           message: "Invalid email or password"
       });
    }
    });
    

    adminRouter.post("/course", function(req,res){
        res.json({
            message: "Course is there"
        })
   })

   adminRouter.put("/course", function(req,res){
    res.json({
        message:"Done"
    })
   })
   adminRouter.get("/course/bulk",function(req,res){
    res.json({
        message: "Done"
    })
})

module.exports={
    adminRouter:adminRouter
}
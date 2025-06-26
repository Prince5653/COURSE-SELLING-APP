const {Router} = require ("express");
const adminRouter = Router();
const {adminModel} = require("../db");

adminRouter.post("/signup", function(req,res){
    res.json({
        message: "Admin signed up successfully"
    });
 })
    adminRouter.post("/signin", function(req, res) {
        // Here you would typically check the admin's credentials against a database
        res.json({
            message: "Admin logged in successfully"
        });
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
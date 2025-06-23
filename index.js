const express = require('express');
const app = express();
const port = 3000;

app.post("/user/signup",function (req, res)  {
    res.json({
        message: "User signed up successfully"
    })
})

app.post("/user/signin", function (req, res) {
    // Here you would typically check the user's credentials against a database
    res.json({
        message: "User logged in successfully"
    })
})

app.get("/user/purchases",function(req, res) {
    res.json({

    })
})

app.post("/course/purchase",function(req, res) {
    res.json({
        message: "Course purchased successfully"
    })
})

app.get("/courses" ,function(req, res) {
    res.json({
    })
})
app.listen(3000);

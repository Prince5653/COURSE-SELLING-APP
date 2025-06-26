const express = require('express');
const mongoose = require('mongoose');
const app = express();
const {userRouter} = require('./routes/user');
const {courseRouter} = require('./routes/course');
const {adminRouter} = require("./routes/admin");
app.use(express.json()); // Important for parsing JSON request bodies

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin",adminRouter);
app.use("/api/v1/course", courseRouter);

async function main(){
await mongoose.connect("mongodb+srv://viper:viper56@cluster0.lm0lcrp.mongodb.net/coursera") 
 
app.listen(3000);
console.log("Server is running on port 3000");
}
main()


const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const userSchema = new  Schema({
    email:{type: String, unique: true, required: true},
    firstName: String,
    lastName:String,
    password: String,
})

const adminSchema = new Schema({
     email:{type: String, unique: true, required: true},
    firstName: String,
    lastName: String,
    password: String,
})

const courseSchema = new Schema({
    title:String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
})

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
})

const userModel= mongoose.model("User", userSchema)
const adminModel = mongoose.model("Admin", adminSchema)
const courseModel = mongoose.model("Course", courseSchema)
const purchaseModel = mongoose.model("Purchase", purchaseSchema)

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}
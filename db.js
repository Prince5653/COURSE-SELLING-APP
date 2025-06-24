const { Schema, default: mongoose } = require("mongoose")

const (userSchema) = Schema({
    username: "String",
    password: "String",
email: "String"
})

const adminSchema = Schema({
    username: "String"
})

const courseSchema = Schema({
    name: "String",
    description: "String",
    price: "Number"
})

const purchaseSchema = Schema({
    userId: "String"
})

const userModel= mongoose
.Model("User", userSchema)
const adminModel = mongoose.Model("Admin", adminSchema)
const courseModel = mongoose.Model("Course", courseSchema)
const purchaseModel = mongoose.Model("Purchase", purchaseSchema)
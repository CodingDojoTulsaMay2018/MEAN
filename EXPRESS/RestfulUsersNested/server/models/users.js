const mongoose = require("mongoose");
const Schema = mongoose.Schema
const UserSchema = new mongoose.Schema({
    name: {type: String, minlength:2,required: [true, "Name field must be at least 3 characters"]},
    age: {type: Number, minlength:1,required: [true, "Age field must have an entry"]},  
   }, {timestamps: true})


   

mongoose.model('User', UserSchema);







const mongoose = require("mongoose");
const Schema = mongoose.Schema
const UsersSchema = new mongoose.Schema({
    name: {type: String, minlength:2,required: [true, "Name field must be at least 3 characters"]},   
   }, {timestamps: true})


   

mongoose.model('Users', UsersSchema);



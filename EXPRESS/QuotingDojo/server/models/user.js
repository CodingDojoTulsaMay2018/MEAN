const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {type: String, minlength:3,required: [true, "Name field must be at least 3 characters"]}, 
    quote: {type: String, minlength:10,required: [true, "Quote field is required and should be greater than 10 characters"]}
   }, {timestamps: true})

mongoose.model('User', UserSchema);
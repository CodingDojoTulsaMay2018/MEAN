const mongoose = require("mongoose");

const DogSchema = new mongoose.Schema({
    name: {type: String, minlength:2,required: [true, "Name field must be at least 3 characters"]},
    color: {type: String, minlength:2,required: [true, "Color field must be at least 2 characters"]},
    age: {type: Number, min:0,required: [true, "Age field must be a number and not blank"]}, 
    breed: {type: String, minlength:3,required: [true, "Breed field must be at least 2 characters"]}
   }, {timestamps: true})

mongoose.model('Dog', DogSchema);



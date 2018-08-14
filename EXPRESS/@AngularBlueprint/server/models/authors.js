const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required:[true, "Please enter an author name!"], minlength:[2, "Name must be at least 2 chars!"]},
    country: {type: String, required:[true, "Please enter an author name!"], minlength:[2, "Name must be at least 2 chars!"]},
    books:[],


},

 {timestamps: true});

mongoose.model("Author", AuthorSchema);







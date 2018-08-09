const mongoose = require("mongoose");
const Schema = mongoose.Schema
var uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    first_name: {type: String, minlength:2,required: [true, "Name field must be at least 2 characters"]},
    last_name: {type: String, minlength:2,required: [true, "Name field must be at least 2 characters"]},
    _secrets: [{type:Schema.Types.ObjectId, ref:'Secret' }],
    _comments: [{type:Schema.Types.ObjectId, ref:'Comment' }],
    email: {
            type: String,
            required: [true, "Email is required"],
            unique:true,
            validate:{
                validator:function(email){
                    return /^[a-zA-Z0-9.!#$%&’+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/.test(email)
                },
                message: "Please enter a valid email."
            },
            maxlength:[120,"Email must be less than 120 characters."]
            },
        
    password: {type: String, minlength:8,required: [true, "Password must be at least 8 characters"]}     
}, {timestamps: true})

   
UserSchema.plugin(uniqueValidator, {message: "Email already exists"});
mongoose.model('User', UserSchema);




const SecretSchema = new mongoose.Schema({
    poster: {type: String, minlength:2,required: [true, "Must have a user"]},
    content: {type: String, minlength:4,required: [true, "Secret must be at least 8 characters"]},
    _comments: [{type:Schema.Types.ObjectId, ref:'Comment' }],    
   }, {timestamps: true})
 
mongoose.model('Secret', SecretSchema);




const CommentSchema = new mongoose.Schema({
    poster: {type: String, minlength:2,required: [true, "Name field must be at least 3 characters"]},
    comment: {type: String, minlength:4,required: [true, "Message field must be at least 8 characters"]},
   }, {timestamps: true})

mongoose.model('Comment', CommentSchema);



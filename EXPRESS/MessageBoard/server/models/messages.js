const mongoose = require("mongoose");
const Schema = mongoose.Schema
const MessageSchema = new mongoose.Schema({
    name: {type: String, minlength:2,required: [true, "Name field must be at least 3 characters"]},
    message: {type: String, minlength:8,required: [true, "Message field must be at least 8 characters"]},
    _comments: [{type:Schema.Types.ObjectId, ref:'Comment' }],    
   }, {timestamps: true})


   

mongoose.model('Message', MessageSchema);


const CommentSchema = new mongoose.Schema({
    name: {type: String, minlength:2,required: [true, "Name field must be at least 3 characters"]},
    comment: {type: String, minlength:4,required: [true, "Message field must be at least 8 characters"]},
   }, {timestamps: true})

mongoose.model('Comment', CommentSchema);
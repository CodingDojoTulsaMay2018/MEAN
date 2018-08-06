const express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
  first_name: {type:String, required:true, minlength:6,},
  last_name: {type:String, required:true, maxlength:20},
  age: {type: Number, min:1, max:150},
  email: {type: String, required:true}},
  {timestamps:true})
 mongoose.model('User', UserSchema);
 var User = mongoose.model('User')
 


const app = express();
// const PORT = 8888;

const server = app.listen(1337);
const io = require('socket.io')(server);

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/static/images"));
app.use(express.static(__dirname + "/static/stylehseets"));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
const flash = require('express-flash');
app.use(flash());



  
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

require("./server/config/routes")(app);






 
 
 
const express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');



const app = express();


const server = app.listen(1337);
const io = require('socket.io')(server);

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/static/images"));
app.use(express.static(__dirname + "/static/stylehseets"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 * 60  }
 
  })) 
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
require("./server/config/routes")(app);

let users = []
let score = 0

io.on('connection', function (socket) { //2
  console.log(socket.id);
      

  socket.on('new_user', function (data) {
      // console.log(data.name);
      console.log("called");
      console.log(typeof data.name)
      if(data.name == "null"){
       console.log("no name given");
       
        // users.push(user)
        // console.log(user.name +" "+ user.score+" "+user.socketId);
   

      }

         
  });
  
    // var user = {
    //   name:data.name,
    //   score: 0,  
    //   socketId:socket.id         
    // }
   
  



});
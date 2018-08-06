const express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');
const request = require('request')

// var mongoose = require('./config/mongoose')

const app = express();
// const PORT = 8888;

const server = app.listen(1337);
const io = require('socket.io')(server);

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/static/images"));
app.use(express.static(__dirname + "/static/stylehseets"));
app.use(express.static(__dirname + "/views"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

  
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

require("./server/config/routes")(app);
var userlist = []


get_new_question()
function get_new_question(){
  request('https://opentdb.com/api.php?amount=1&category=22&difficulty=easy&type=multiple', { json: true }, (err, res, data) => {
    if (err) { return console.log(err); }
    // console.log(data);
    setTimeout(get_new_question, 10000)
    console.log("Category: "+data.results[0].category);
    console.log("Difficulty: "+data.results[0].difficulty);
    console.log("Question: "+data.results[0].question);

    console.log("Correct: "+data.results[0].correct_answer);
    console.log("Wrong: "+data.results[0].incorrect_answers[0]);
    console.log("Wrong: "+data.results[0].incorrect_answers[1]);
    console.log("Wrong: "+data.results[0].incorrect_answers[2]);

    io.emit('trivia_info',data)

    // io.emit('trivia_info',{question:data.results[0].question})


    
})
}




io.on('connection', function (socket) { //2
  console.log(socket.id);

  socket.on('new_user', function (data) {                
      errormessage = ""
      data.username = data.username.toLowerCase()      
      exists = userlist.some(function(o){return o["username"]=== data.username})
      console.log(data.username)
      console.log(data.username.length);
      
    

      if(!exists){
        
        
        if(data.username.length > 0){
          console.log("made it here");
          
          var newUser = {
            username:data.username,
            score: 0
          }
          userlist.push(newUser)
          socket.emit('register_success')
      
          console.log("User " +data.username+ " added")
        }
        else{
          errormessage = "Name can not be empty"
          socket.emit('show_error',{errormessage:errormessage}) 
        }
        

      }
      else{
          errormessage = "User already exists"
          socket.emit('show_error',{errormessage:errormessage}) 
      }

      console.log(userlist);
      
      
      

      // else if(!exists){
      //   var newUser = {
      //     username:data.username,
      //     score: 0
      //   }
      //   userlist.push(newUser)
      //   socket.emit('register_success')
      //   return
      //   console.log("User " +data.username+ " added");
      // }

      // else{
      //   errormessage = "Name already exists"
      //   socket.emit('show_error',{errormessage:errormessage})
      //   console.log("User " +data.username+ " already exists");
      // }
      
      
      
      
      
  });
 
  







});


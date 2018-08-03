const express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');

const app = express();
// const PORT = 8888;

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
    cookie: { maxAge: 60000 }
  }))

  
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

require("./server/config/routes")(app);

var messageArray = []

io.on('connection', function (socket) { //2
  console.log(socket.id);
  

  socket.on('new_user', function (data) {                
      io.emit('show_box') 
      io.emit('all_messages',{all_messages:messageArray})    
  });

  socket.on('new_message', function(data){

    messageArray.unshift(data.form)
    last_message = data.form

    
    io.emit('last_message',{last_message:last_message})
    
  })


});

// app.listen(PORT, ()=>{
//     console.log(`Listening on port ${PORT}`);
// })



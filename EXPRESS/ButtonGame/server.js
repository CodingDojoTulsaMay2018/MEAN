const express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');
const app = express();
// const PORT = 8888;

const server = app.listen(6789);
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

// app.listen(PORT, ()=>{
//     console.log(`Listening on port ${PORT}`);
// })

io.on('connection', function (socket) { 
  console.log("here i am***************");//2
    let counter = 0
    // socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
    socket.on('buttonPushed', function () { 
      
      
      counter += 1          
      socket.broadcast.emit('info',{counter:counter})

    
      //8 (note: this log will be on your server's terminal)
    });
    socket.on('clearCounter', function () { 
        counter = 0       
        console.log(counter);
           
        socket.broadcast.emit('info',{counter:counter})
  
      
        //8 (note: this log will be on your server's terminal)
      });
    
      
  });
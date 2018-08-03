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

// app.listen(PORT, ()=>{
//     console.log(`Listening on port ${PORT}`);
// })
let color = 'green'


io.on('connection', function (socket) { //2
    
        io.sockets.emit('color_change',{color:color})
    
    
        socket.on('green', function (data) {       
        color = 'green'     
        io.emit('color_change',{color:color})
       
        });

        socket.on('blue', function (data) {       
        color = 'blue'
        io.emit('color_change',{color:color})
      
        });

        socket.on('pink', function (data) {        
        color = 'pink'
        io.emit('color_change',{color:color})
    
  
       });
        
    });
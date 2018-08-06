const express = require("express");
const path = require("path");
const app = express();
var bodyParser = require('body-parser');
const PORT = 5000;

var session = require('express-session');
const flash = require('express-flash');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
app.use(flash());
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}!`);
})



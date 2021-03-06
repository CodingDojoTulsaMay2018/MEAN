const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const PORT = 5000;
const flash = require('express-flash');
const bcrypt = require('bcrypt');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.use(flash());

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");


require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}!`);
})
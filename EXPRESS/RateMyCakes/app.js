const express = require("express");
const bodyParser = require("body-parser");
const PORT = 5000;
const app = express();

app.use(bodyParser.json());

require("./server/config/mongoose");
require("./server/config/routes")(app);
require("./server/config/mongoose");

app.use(express.static( __dirname + '/public/dist/public' ));

app.listen(PORT, ()=>{
    console.log(`Listening on PORT: ${PORT}!`);
})
const dogs = require("./../controllers/dogs");

module.exports = (app) => {
    app.get("/", dogs.index),
    app.get("/newDog", dogs.newDog),
    app.get("/viewDog/:id", dogs.viewDog),
    app.get("/deleteDog/:id", dogs.deleteDog),
    app.get("/editDog/:id", dogs.editDogPage),
    app.post("/editDog/:id", dogs.editDog),
    app.post("/addDog", dogs.addDog)
    
    
    
}
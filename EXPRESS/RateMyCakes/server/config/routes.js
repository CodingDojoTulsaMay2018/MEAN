const cakes = require("./../controllers/cakes");

module.exports = (app)=>{
    app.get("/cakes", cakes.index),
    app.post("/cakes", cakes.create),
    app.post("/rate", cakes.create_rating),
    app.get("/cakes/:id", cakes.show),
    app.put("/cakes/:id", cakes.update)
    
}
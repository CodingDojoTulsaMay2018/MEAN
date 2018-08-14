const users = require("./../controllers/users");

module.exports = (app)=>{
    app.get("/users", users.index),
    app.post("/users", users.create),
    app.get("/users/:id", users.show),
    app.put("/users/:id", users.update),
    app.delete("/users/:id",users.delete)
}
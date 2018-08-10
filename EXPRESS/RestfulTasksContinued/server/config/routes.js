const users = require("./../controllers/users");

module.exports = (app) => {
    app.get("/users", users.getAll)
    app.get("/users/:id",users.getUser)
    app.post("/users",users.create)
    app.put("/users/:id",users.update)
    app.delete("/users/:id",users.delete)
}
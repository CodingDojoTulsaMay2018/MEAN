const login = require("./../controllers/login");

module.exports = (app) => {
    app.get("/", login.index)
    app.post("/register", login.register)
    app.post("/login", login.login)
    app.get("/wall", login.wall)
    app.post("/addSecret", login.addSecret)
    app.get("/logout",login.logout)
    app.get("/viewSecret/:id", login.viewSecret)
}
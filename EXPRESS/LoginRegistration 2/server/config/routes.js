const login = require("./../controllers/login");

module.exports = (app) => {
    app.get("/", login.index)
    app.post("/register", login.register)
    app.post("/login", login.login)
    app.get("/success", login.success)
}
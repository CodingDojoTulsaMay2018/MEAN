const users = require("./../controllers/users");

module.exports = (app) => {
    app.get("/", users.index),
    app.post("/create", users.create),
    app.get("/viewQuotes", users.viewQuotes)
    
    
}
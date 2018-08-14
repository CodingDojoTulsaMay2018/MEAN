const authors = require("./../controllers/authors");

module.exports = (app)=>{
    app.get("/authors", authors.index),
    app.post("/authors", authors.create),
    app.get("/authors/:id", authors.show)
}
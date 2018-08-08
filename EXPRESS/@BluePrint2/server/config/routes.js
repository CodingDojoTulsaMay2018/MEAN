const messages = require("./../controllers/messages");

module.exports = (app) => {
    app.get("/", messages.index),
    app.post("/postMessage", messages.postMessage)
    app.post("/postComment/:id", messages.postComment)
}
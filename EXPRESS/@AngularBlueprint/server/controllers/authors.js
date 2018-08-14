const mongoose = require("mongoose");
const Author = mongoose.model("Author");

module.exports = {
    index: (req, res)=>{
        Author.find({})
        .then(author => res.json(author))
        .catch(err => res.send(err))
    },
    create: (req, res)=>{
        Author.create(req.body)
        .then(author => res.json(author))
        .catch(err => res.send(err))
    },
    show: (req, res)=>{
        Author.findById(req.params.id)
        .then(author => res.json(author))
        .catch(err => res.send(err))
    }
}
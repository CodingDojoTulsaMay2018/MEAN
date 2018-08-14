const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = {
    index: (req, res)=>{
        User.find({})
        .then(user => res.json(user))
        .catch(err => res.send(err))
    },
    create: (req, res)=>{
        User.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.send(err))
    },
    show: (req, res)=>{
        User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.send(err))
    },
    update: (req, res)=>{
        console.log("Made it to here")
        User.update({_id:req.params.id},{$set:{name:req.body.name,age:req.body.age}})
        .then(user => res.json(user))
        .catch(err => res.send(err))
    },
    delete: (req, res)=>{
        User.remove({_id:req.params.id})
        .then(user => res.json(user))
        .catch(err => res.send(err))
    }
}


const mongoose = require("mongoose");
const Cake = mongoose.model("Cake");
const Rating = mongoose.model("Rating");

module.exports = {
    index: (req, res)=>{
        Cake.find({})
        .then(cake => res.json(cake))
        .catch(err => res.send(err))
    },
    create: (req, res)=>{
        console.log("Made it to controller");       
        Cake.create(req.body)
        .then(cake => res.json(cake))
        .catch(err => res.send(err))
    },
    show: (req, res)=>{
        Cake.findById(req.params.id)
        .then(cake => res.json(cake))
        .catch(err => res.send(err))
    },
    update: (req, res)=>{
        console.log("Made it to here")
        Cake.update({_id:req.params.id},{$push:{stars:req.body.stars,comment:req.body.comment}})
        .then(user => res.json(cake))
        .catch(err => res.send(err))
    },
    create_rating: (req, res)=>{
        console.log("Made it to here")
        Rating.update({_id:req.params.id},{$push:{stars:req.body.stars,comment:req.body.comment}})
        .then(user => res.json(cake))
        .catch(err => res.send(err))
    }
}


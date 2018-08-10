const mongoose = require("mongoose");
const User = mongoose.model("User");


module.exports = {


    getAll: (req, res) => {
        User.find({},function(err,usersFromDB){
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err})
                
            } else {
                console.log(usersFromDB);
               
                res.json({message:"Success", data:usersFromDB});
            }
        })
      
    },
    getUser: (req, res) => {
        User.find({_id:req.params.id},function(err,usersFromDB){
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err})
                
            } else {
                console.log(usersFromDB);
               
                res.json({message:"Success", data:usersFromDB});
            }
        })
      
    },
    create: (req, res) => {      
        user = new User({
            name :req.body.name
        })
       user.save({},function(err,usersFromDB){
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err})
                
            } else {
                console.log(usersFromDB);
               
                res.json({message:"Success", data:usersFromDB});
            }
        })
      
    },
    update: (req, res) => {      
    
       

       User.update({_id:req.params.id},{$set:{name:req.body.name}},function(err,usersFromDB){
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err})
                
            } else {
                console.log(usersFromDB);
               
                res.json({message:"Success", data:usersFromDB});
            }
        })
      
    },
    delete: (req, res) => {
       User.remove({_id:req.params.id},function(err,usersFromDB){
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err})
                
            } else {
               
                res.json({message:"Successfully removed", data:usersFromDB});
            }
        })
      
    },

    
    



}














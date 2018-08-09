const mongoose = require("mongoose");
const User = mongoose.model("User");


module.exports = {


    index: (req, res) => {
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
    create: (req, res) => {

        user = new User({
            name :req.params.name
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
    remove: (req, res) => {
       User.remove({name:req.params.name},function(err,usersFromDB){
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err})
                
            } else {
               
                res.json({message:"Successfully removed", data:usersFromDB});
            }
        })
      
    },
    view: (req, res) => {
        User.find({name:req.params.name},function(err,usersFromDB){
             if(err) {
                 console.log(err);
                 res.json({message: "Error", error: err})
                 
             } else {
                
                 res.json({message:"Successful Viewing", data:usersFromDB});
             }
         })
       
     },
    
    



}














const mongoose = require("mongoose");
const User = mongoose.model("User");



module.exports = {
    index: (req, res) => {
        User.find({}, (err, usersFromDB)=>{
            if(err) {
                console.log(err);
                console.log("2");
            } else {
                console.log(usersFromDB);
                console.log("2");
                res.render("index", {users: usersFromDB});
            }
        })
        console.log("1");
    }, 
    create: (req, res) => {
        const user = new User();
        
        console.log(req.body);
        user.name = req.body.name
        user.quote = req.body.quote  
        
        user.save((err)=>{
            if(err){
                console.log("We have an error");               
                for(var key in err.errors){
                    req.flash('registration',err.errors[key].message)
                }               
                console.log(err);  
            }
            res.redirect("/");
        });
    },
    viewQuotes: (req, res) => {
        User.find({}, (err, usersFromDB)=>{
            if(err) {
                console.log(err);
                console.log("2");
            } else {
                console.log(usersFromDB);
                console.log("2");
                res.render("viewQuotes", {users: usersFromDB});
            }
        })
        console.log("1");
    }
    
}
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcrypt")
const flash = require('express-flash')
const Secret = mongoose.model("Secret");




module.exports = {
    index: (req, res) => {
       
        res.render("index");
    }, 
    logout: (req, res) => {
       
        req.session.destroy();
        
        res.redirect("/");
    },



    register: (req, res) => {
        const user = new User({
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password
            });       
        user.validate(function(err){    
            if(err){
               let message ={                   
                    email:      (err.errors.email == undefined ?  "" : err.errors.email.message) ,
                    first_name: (err.errors.first_name == undefined ? "" : err.errors.first_name.message),
                    last_name:  (err.errors.last_name == undefined ? "" : err.errors.last_name.message) ,
                    password:   (err.errors.password == undefined ? "" : err.errors.password.message)
                    } 
                req.flash('registration', message)              
                res.redirect("/")              
            }
            else{
                user.password = bcrypt.hashSync(req.body.password,10)
                user.save({},(err,userFromDB)=>{
                    if(err){ 

                        res.redirect("/")                      
                    }
                    else{                
                        res.redirect("wall");
                    }
                })               
            }
        })
    },


    login: (req, res) => {

        User.findOne({email:req.body.email}, (err, userFromDB)=>{           
            if(userFromDB == null){
                let message = {
                    logemail: "Invalid Email or Password"
                }
                console.log("Invalid email or password")
                req.flash('registration', message)
                res.redirect("/")
            }
            else{                 
                passwordIsValid = bcrypt.compareSync(req.body.password, userFromDB.password)
                if(passwordIsValid){ 
                    req.session.email = userFromDB.email 
                    req.session.name = userFromDB.first_name
                    
                    
                   
                    req.session._id = userFromDB._id 
                    

                    res.redirect("/wall");
                }
                else{
                    let message = {
                        logemail: "Invalid Email or Password"
                    }                   
                    req.flash('registration', message)            
                    res.redirect("/")
                }               
            }
        })      
    },

    wall: (req, res) => {
        User.find({}).populate("_secrets").exec(function(err,usersFromDb){
            if(err){
                console.log("ERROR")
            }
            else{
                console.log("Made it here******************");
                console.log("Secrets from DB"+usersFromDb);
                
                res.render("wall",{users:usersFromDb})
            }
        })
        
    },


    addSecret: (req, res) => {
        console.log("ADD SECRET************************");    
        User.findOne({_id:req.session._id}, (err,userFromDB)=>{
            if(err){
                console.log(err);
                console.log("ERRORS ****************************************");
                
                res.redirect("wall");              
            }
            else{
                const secret = new Secret();
                secret.content = req.body.secret
                secret.poster= req.session.name
                secret.save({},(err,secretFromDb)=>{
                    if(err){
                        console.log(err);
                        
                        console.log("Secret not saved");                       
                    }
                    else{
                        userFromDB._secrets.push(secret)
                        userFromDB.save()
                        console.log("Secret saved************************");
                        res.redirect("/wall");
                    }
                })
            }
        })

        
    },
    viewSecret: (req, res) => {
        User.find({}).populate("_secrets").exec(function(err,usersFromDb){
            if(err){
                console.log("ERROR")
            }
            else{
                console.log("Made it here******************");
                console.log("Secrets from DB"+usersFromDb);
                
                res.render("wall",{users:usersFromDb})
            }
        })
        
    },
}

















const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcrypt")
const flash = require('express-flash')



module.exports = {
    index: (req, res) => {
       
        res.render("index");
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
                        res.redirect("success");
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
                    res.redirect("success");
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
    success: (req, res) => {
        res.render("success");
    }


    



}














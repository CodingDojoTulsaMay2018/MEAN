var mongoose = require('mongoose');
var User = mongoose.model('User')


module.exports = app =>{

    
    console.log("this line 2", this);
    app.get("/", (req, res)=> {
       
        res.render("index.ejs");
    })
    app.post('/add_users', function(req, res) {
        console.log("POST DATA", req.body);
        
        

        var user = new User({first_name:req.body.first_name,last_name:req.body.last_name, age:req.body.age,email:req.body.email,})
        

        user.save(function(err){
            if(err){
                console.log("Something went wrong");
                console.log(err.errors.first_name.message);
                let errors = {}
               
                    // console.log(key);
                    // console.log(err.errors[key]);
                
                    
                    if(err.errors.first_name.message) {
                        console.log("Error: need first name");
                        
                    }
                    if(err.errors.last_name.message) {
                        console.log("Error: need last name");
                            
                    }
                    if(err.errors.age.message) {
                        console.log("age required");
                            
                    }
                    // if(err.errors.email.message) {
                    //     console.log("email required");
                            
                    // }
                    
                
                res.redirect('/')

            }else{
                console.log("Successfully added a user");
                res.redirect('/')
            }
        })
       
    })

    app.post('/find',function(req,res){
        
        
        User.find({},function(err,users){
            if(err){
                console.log("Something went wrong");
                
            }else{
                console.log(users);
                console.log("Successful search");
                res.redirect('/')
            }
        })

     
    })
    app.post('/findUser',function(req,res){
        
        
        User.find({name:req.body.name},function(err,users){
            if(err){
                console.log("Something went wrong");
                
            }else{
                console.log(users);
                if(users.length<1){
                    console.log("User not found");
                }
                else{
                    console.log("Successful search");
                }
                
                res.redirect('/')
            }
        })

     
    })

   






}
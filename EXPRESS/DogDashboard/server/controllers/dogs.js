const mongoose = require("mongoose");
const Dog = mongoose.model("Dog");
let errors = {}



module.exports = {
    index: (req, res) => {
        Dog.find({}, (err, dogsFromDB)=>{
            if(err) {
                console.log(err);
                console.log("2");
            } else {
                console.log(dogsFromDB);
                console.log("2");
                res.render("index", {dogs: dogsFromDB});
            }
        })
      
    }, 


    
    viewDog: (req, res) => {
        console.log("MADE IT"); 
          
        Dog.findOne({_id:req.params.id}, (err, dogsFromDB)=>{
            if(err) {
                console.log(err);
               
            } else {
                console.log(dogsFromDB);
                
                res.render("viewDog", {dog: dogsFromDB});
            }
        })
        console.log("1");
    },

    editDogPage: (req, res) => {
        console.log("MADE IT");           
        Dog.findOne({_id:req.params.id}, (err, dogsFromDB)=>{
            if(err) {
                console.log(err);
               
            } else {
                console.log(dogsFromDB);

                
                
                
                res.render("editDog", {dog: dogsFromDB,errors:errors});
                errors={}
            }
        })
        console.log("1");
    },

    deleteDog: (req, res) => {
        console.log("MADE IT"); 
          
        Dog.findOne({_id:req.params.id}, (err, dogsFromDB)=>{
            if(err) {
                console.log(err);
                res.redirect("/");
               
            } else {
                console.log(dogsFromDB);
                dogsFromDB.remove()
                res.redirect("/");
                
            }
        })
        console.log("1");
    },
    
    newDog: (req, res) => {
       
        res.render("newDog",{errors:errors});
        errors={}
        

    },

    
    addDog: (req, res) => {
        const dog = new Dog();       
        
        dog.name = req.body.name
        dog.breed = req.body.breed  
        dog.color = req.body.color
        dog.age = req.body.age        
        dog.save((err)=>{
            
            if(err){
                
                errors =    {name: err.errors.name.message,
                            breed: err.errors.breed.message,
                            color: err.errors.color.message,
                            age: err.errors.age.message,}            
               
               
            }
            res.redirect("newDog");
        })
    },
    editDog: (req, res) => {
        Dog.findByIdAndUpdate(req.params.id,{$set:{name:req.body.name,breed:req.body.breed,color:req.body.color,age:req.body.age}},{new:true},function(err,dog){
            if(err) {
                console.log("failed validation");
                // console.log(err);
                
                    errors =    
                    {name: err.errors.name.message ,
                    breed: err.errors.breed.message,
                    color: err.errors.color.message,
                    age: err.errors.age.message,}
                                                 
                
                res.redirect("/editDog/"+req.params.id);
               
            } else {
                console.log("edited dog*******"+dog);
                
                console.log("NO ERRORS**************************************");          
                res.redirect("/");
                
            }
        })
        console.log("send me home");
        
        
       
    }
    
}
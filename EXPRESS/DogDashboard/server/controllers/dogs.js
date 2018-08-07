const mongoose = require("mongoose");
const Dog = mongoose.model("Dog");



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
                
                res.render("editDog", {dog: dogsFromDB});
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
        console.log("MADE IT");
        res.render("newDog");
        

    },

    
    addDog: (req, res) => {
        const dog = new Dog();       
        console.log(req.body);
        dog.name = req.body.name
        dog.breed = req.body.breed  
        dog.color = req.body.color
        dog.age = req.body.age        
        dog.save((err)=>{
            if(err){
                console.log("We have an error");               
                for(var key in err.errors){
                    req.flash('registration',err.errors[key].message)
                }               
                console.log(err);
                // res.redirect("newDog");  
            }
            res.redirect("newDog");
        })
    },
    editDog: (req, res) => {
     

        Dog.findByIdAndUpdate(req.params.id,{$set:{name:req.body.name,breed:req.body.breed,color:req.body.color,age:req.body.age}},{new:true},function(err,dog){
            if(err) {
                for(var key in err.errors){
                    req.flash('registration',err.errors[key].message)
                }  

                res.redirect("editDog");
               
            } else {
                console.log("NO ERRORS**************************************");          
                res.redirect("/");
                
            }
        })
        console.log("send me home");
        
        
       
    }
    
}
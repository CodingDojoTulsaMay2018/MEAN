module.exports = app =>{




    console.log("this line 2", this);
    app.get("/", (req, res)=> {
       
        res.render("index.ejs");
    })
    app.post('/users', function(req, res) {
        console.log("POST DATA", req.body);
        // class user{
        //     constructor(name,age){
        //     this.name = name
        //     this.age = age
            
        //     } 
        // }
        var user = new user({name:req.body.name, age:req.body.age})

        user.save(function(err){
            if(err){
                console.log("Something went wrong");
                
            }else{
                console.log("Successfully added a user");
                res.redirect('/')
            }
        })
       
    })

   






}
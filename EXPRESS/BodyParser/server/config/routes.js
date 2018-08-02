module.exports = app =>{
    console.log("this line 2", this);
    app.get("/", (req, res)=> {
       
        res.render("index");
    })
    app.post('/users', function (req, res){
        console.log("POST DATA \n\n", req.body)
      
        
        req.session.name = req.body.name;
        console.log("session name"+req.session.name);
        //code to add user to db goes here!
        // redirect the user back to the root route.  
        res.redirect('/')
    });

    app.get("/users/:id", function (req, res){
        console.log("The user id requested is:", req.params.id);
        // just to illustrate that req.params is usable here:
        res.send("You requested the user with id: " + req.params.id);
        // code to get user from db goes here, etc...
    });
   
   

   






}
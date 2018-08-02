module.exports = app =>{
    console.log("this line 2", this);
    app.get("/", (req, res)=> {
       
        res.render("index.ejs");
    })
    app.post("/result", (req, res)=> {
       
        ninja = req.body
        
        req.session.location = req.body.dojoLocation;
        req.session.name = req.body.fullname;
        req.session.language = req.body.favoriteLanguage;
        req.session.comments = req.body.comments;
        res.redirect("results");
    })

    app.get("/results", (req, res)=> {
        
        var ninja = 
        {name: req.session.name, 
        location: req.session.location,
        language: req.session.language,
        comments: req.session.comments,
            
        } 
        res.render("results.ejs",{ninja:ninja});
    })


   

   






}
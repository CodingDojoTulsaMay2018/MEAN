module.exports = app =>{
    console.log("this line 2", this);
    
    app.get("/", (req, res)=> {
       
        if(!req.session.count){
            req.session.count=0
        }
        req.session.count+=1
        res.render("index.ejs",{counter:req.session.count});
    })

    app.post("/add2", (req, res)=> {
       
        req.session.count+=1
        res.redirect("/");
    })
    app.post("/clear", (req, res)=> {
       
        req.session.count= 0
        res.redirect("/");
    })


 
   


   






}
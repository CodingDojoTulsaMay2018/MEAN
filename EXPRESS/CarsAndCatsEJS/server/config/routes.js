module.exports = app =>{
    console.log("this line 2", this);
    app.get("/", (req, res)=> {
       
        res.render("index");
    })

    app.get("/cars", (req, res)=>{
        res.render("cars");
    })
    app.get("/cats", (req, res)=>{
        res.render("cats");
    })

}


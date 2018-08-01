module.exports = app =>{
    console.log("this line 2", this);
    app.get("/", (req, res)=> {
       
        res.render("index");
    })
    app.get("/cats", (req, res)=>{
        res.render("cats");
    })

    app.get("/angry", function(request,response){
        var cat = 
            {favorite_food: "Tuna", 
            age: 3,
            image: "/images/cat3.jpg",
            name: "Angry",
            sleeping:["Under the Bed", "In the Tub"]       
            }                    
        response.render('details', {cat: cat});
    })
    app.get("/diabeetus", function(request,response){
        var cat = 
            {favorite_food: "Candy", 
            age: 12,
            image: "/images/cat1.jpg",
            name: "Diabeetus",
            sleeping:["Coma", "Cookie Jar"]       
            }                    
        response.render('details', {cat: cat});
    })






}
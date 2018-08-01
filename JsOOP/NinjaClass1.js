function Ninja(name)
{
    var speed = 3;
    var strength = 3;
    this.health = 100;
    this.name = name

    this.sayName = function()
    {
        console.log("My ninja name is "+this.name);       
    }
    this.showStats = function()
    {
        console.log("Name: "+this.name+", Health: "+this.health+ ", Speed: " + speed + ", Strength: " + strength);
        
    }
    this.punch = function(ninja)
    {
        if(ninja instanceof Ninja)
        {
            console.log("Passed validation")
            ninja.health -=5;
            return
        }
        console.log("Failed validation")
        
    }
    this.kick = function(ninja)
    {
        ninja.health -= strength*15
    }
}
let arr = []
var frank = new Ninja("Frank")
frank.showStats()
var mike= new Ninja("Mike")
// mike.showStats()
console.log();

frank.punch(mike)
// mike.showStats()


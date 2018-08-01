// class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         console.log("You created a Dot!");
//     }
// }
// const dot1 = new Dot(10, 10);
// console.log(dot1.x);


// ********************************************************************
// class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     showLocation() {
//         // ES6 String Interpolation! Note that the string is enclosed in backticks, not quotes.
//         console.log(`This Dot is at x ${this.x} and y ${this.y}`);
//     }
// }
// const dot2 = new Dot(5, 13);
// dot2.showLocation();
// ********************************************************************


// class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     // prototype method
//     showLocation() {
//         console.log(`This Dot is at x ${this.x} and y ${this.y}`);
//     }
//     // static method
//     static getHelp() {
//         console.log("This is a Dot class, for created Dots! A Dot takes x and y coordinates, type 'new Dot' to create one!");
//     }
// } 
// const dot3 = new Dot(4, 2);
// // we can see showLocation from our instance...
// console.log(dot3.showLocation);
// dot3.showLocation()
// // but we can't see getHelp
// console.log(dot3.getHelp); //This can not be called directly since it is a static method

// // however we can call getHelp this way:
// Dot.getHelp();

// ********************************************************************

// // parent Dot class
// class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     showLocation() {
//         console.log(`This Dot is at x ${this.x} and y ${this.y}`);
//     }
// }
// // child Circle class
// class Circle extends Dot {
//     constructor(x, y, radius) {       
//         super(x, y); //Calls the constructor of the parent class
//         this.radius = radius;
//     }
// }
// // we can now create Circles
// const circle1 = new Circle(32, 34, 33);
// // same attributes as a Dot, plus a radius
// console.log(circle1);
// // and Circles can access Dot methods
// circle1.showLocation();


// ********************************************************************
// parent Dot class
// class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     showLocation() {
//         console.log(`This ${ this.constructor.name } is at x ${this.x} and y ${this.y}`);
//     }
// }
// // child Circle class
// class Circle extends Dot {
//     constructor(x, y, radius) {
//         super(x, y);
//         this.radius = radius;
//     }
// }
// const circle1 = new Circle(33, 33, 33);
// circle1.showLocation();    //Shows the Circle as the constructor
// const Dot1 = new Dot(23,32)
// Dot1.showLocation() //Shows the Dot as the constructor

// ********************************************************************
// // parent Dot class
// class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     showLocation() {
//         console.log(`This ${ this.constructor.name } is at x ${ this.x } and y ${ this.y }`);
//     }
//     // simple method in the parent class
//     parentFunction(){
//         return "This is coming from the parent!";
//     }
// }
// // child Circle class
// class Circle extends Dot {
//     constructor(x, y, radius) {
//         super(x, y);
//         this.radius = radius;
//     }
//     // simple function in the child class
//     childFunction() {
//         // by using super, we can call the parent method
//         const message = super.parentFunction();
//         console.log(message);
//     }
// }
// const circle = new Circle(1, 2, 3);
// circle.childFunction();
// // ********************************************************************
// class Pizza {
//     constructor(radius, slices) {
//         this.radius = radius;
//         this._slices = slices;
//     }
//     get slices () { 
//         return this._slices; 
//     }
//     set slices (slices) { 
//         this._slices = slices;
//     }
// };
// const pie = new Pizza(12, 6);
// console.log(pie.slices);     // we use the getter to determine how many slices we have
// pie.slices = 12;             // the setter will change the number of slices
// console.log(pie.slices);     // use the getter again to make sure our slices have doubled
// // ********************************************************************
// class Circle{
//     constructor(x, y, radius) {
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//     }
//     get diameter() {
//         return this.radius * 2;
//     }
// }
// const circle1 = new Circle(1, 2, 5);
// console.log(circle1.diameter);

class Ninja{
    constructor(name){
        this.name = name
        this.speed = 3
        this.strength = 3
        this.health = 100
        }
        sayName(){
            console.log(this.name);           
        }
        showStats(){
            console.log("Name: "+ this.name + ", Strength: " + this.strength + ", Speed: " + this.speed + ", Health: " + this.health);           
        }
        drinkSake (){
            this.health +=10
        }   
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake()       
    }     
}

let frank = new Ninja("Frank")
frank.sayName()
frank.drinkSake()
frank.showStats()
let mike = new Sensei("Mike")
mike.sayName()
mike.showStats()
mike.speakWisdom()
mike.showStats()






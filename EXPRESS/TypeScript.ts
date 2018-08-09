var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "9";  //This is not a string and can not be changed in type script
//**********************************************************************//
function sayHello(name: string){
   return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello("9")); //Type does not match
//**********************************************************************//
function fullName(firstName?: string, lastName?: string, middleName?: string){
   let fullName = `${firstName} ${middleName} ${lastName}`;
   return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones")); 
//Argument type and count needs to match
//*************************************cd*********************************//
interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   belts: 4  //belt is missing an s at the end. key has to be exact match in TS
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));
//**********************************************************************//
class Ninja {
   
   constructor(
      public firstName: string,
      public lastName: string,
      public fullName?: string){
         this.fullName = `${firstName} ${lastName}`;
      }
   debug(){
      console.log("Console.log() is my friend.")
   }
}
// This is not making an instance of Ninja, for some reason:
// const shane = Ninja(); //TS is missing New and 2 arguments for firstName and last Name
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = new Ninja("Alan","Turing")
    
    

// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));
//**********************************************************************//


var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => {x * x};
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x,y) => x * y;
// Nor is this working:
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}
//*************************************************************
class Elephant {
   constructor(public age: number){}
   birthday = age =>{
      this.age++;
   }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)


   //*********************************************** */
   class Bike {
        
    constructor(
         public price: number,
        public max_speed: string,
         public totalMiles= 0,
         )
         
     { }
    
    displayInfo(){
        console.log(`Price: ${this.price}, Max speed ${this.max_speed}, Total Miles ${this.totalMiles}`)
       return this
     }
     ride() {
         console.log("Riding")
         this.totalMiles += 10
         return this
     }
     reverse() {
         console.log("Reversing")
         this.totalMiles -= 5
         return this
     } 
 }

 var bike1 = new Bike(200, "50mph")
 bike1.ride().ride().ride().ride().displayInfo()
 bike1.reverse().displayInfo()
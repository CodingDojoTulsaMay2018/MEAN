// var foo = "bar";
// function magic(){
//     foo = "hello world"; //assigns "hello wordl to foo"
//     console.log(foo);
//     var foo;   //Gets hoisted to the top of the function
//                //If the var foo was not in this function, foo would then look outside
//                //of the funciton to get the value
// }
// magic();
// console.log(foo);


// var foo;                  // 'foo' is a declaration, it's global and gets hoisted
// function magic(){         // 'magic()' also gets hoisted to the top
//     var foo;              // here 'foo' is declared within 'magic()' and gets hoisted to the top of its scope
//     foo = "hello world";  // we assign a value to our function scoped 'foo'
//     console.log(foo);     // we log it as 'hello world'
// }                       
// foo = "bar";              // here, we assign a value to the global 'foo'
// magic();                  // magic is called, the first console.log runs
// console.log(foo);         // finally we log the global foo



var magicalUnicorns = function(){
    console.log("Will it blend?");
}
magicalUnicorns();
console.log("Don't breathe this!");

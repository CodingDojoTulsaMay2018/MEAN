// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";
// console.log(example);

var hello
hello = 'world';
console.log(hello);   


var needle
needle = 'haystack';
function test(){
    var needle
	needle = 'magnet';
	console.log(needle);
}
test();

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
// console.log(brendan);
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
// console.log(genre); //undefined
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b"; //gets hoisted to the topof the function
// 	console.log(genre);
// }
// console.log(genre);

// dojo = "san jose";
// console.log(dojo); //prints san jose
// learn();
// function learn() {
//     // var dojo; this gets hoisted but not the assignment
// 	dojo = "seattle";
// 	console.log(dojo); //prints seattle
// 	var dojo = "burbank";
// 	console.log(dojo);//prints burbank
// }
// console.log(dojo);//prints san jose

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo.status = "closed for now";  //was missking a key field
//         }
//         return dojo;
// }



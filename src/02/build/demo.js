// let x = 5
let x;
let y;
let z;
let a;
let b;
// Assign wrong "type"(has to be an array with a string not just a string)
//b = "Hello!"//Has to be in an array
b = ["Hello!"]; //Correct 
//b = 1234 //Has to be a string not an integer
//Allows the value to be any kind of type!
let u;
u = "Hello!";
u = 1234;
u = new Date();
u = [];
u = true;
//When you want to assign a different type to a variable that has already be assigned a type and is not any
b = "Hello"; //This allows it to be reassigned as just a string 
//Though using the any type defeats the purpose of typescript with its use in type checking 

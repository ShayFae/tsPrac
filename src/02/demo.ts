// let x = 5
let x: number
let y: string
let z: boolean
let a: Date
let b:string[]

//Assign wrong "type"(has to be an array with a string not just a string)
b = "Hello!"// has to be in an array
b = ["Hello!"] //Correct 
//Can't be a number has to be a string
b = 1234 //Has to be a string not an integer

//Allows the value to be any kind of type!
let u: any

u = "Hello!"
u = 1234
u = new Date()
u = []
u = true

//When you want to assign a different type to a variable that has already be assigned a type and is not any
b = "Hello" as any //This allows it to be reassigned as just a string 

//Though using the any type defeats the purpose of typescript with its use in type checking 
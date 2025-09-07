// Using function without formal paramaters
function display()
{
    console.log("Hello Guys how are you all")
}
display()
display()

//Uses function with formal parameters
function name(x)
{
    console.log(`Welcome ${x} to the dark vibes of computer science`)
}
name("Arshad")

//Default parameter:
function sum(a,b=23,c)
{
    console.log(a,b,c)
}
sum(2)
//Function can return the values
function mul(a,b)
{
    return a*b;
}
let res=mul(5,5); console.log(res);

// Function can be written in three ways in JS
//1.simple/Normal function
function simple()
{
    console.log("roshan")
}
simple()
//Function expression
let z=function()
{
    console.log("Aman")
}
console.log(simple,z)

//Arrow function
let z1=() =>  console.log("arshad")
z1()

//Write a program for adding two number and print the result.
function sum(a,b)//By normal function
{
    console.log(a+b)
}
sum(20,30)

//By function expression
let p=function(a,b)
{
   console.log(a+b)
}
p(2,4)
//By arrow function
let z2= (a,b) => console.log(a+b)
z2(20,30)


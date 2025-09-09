//Revision of functions:
//1.Normal function
function sub(a,b){
    console.log(a-b)
}
sub(20,10)
//function expression
let z=function(a,b){
     console.log(a-b)
}
z(20,10)
//Arrow function
let z1 = () => console.log(a,b); z(20,10);
//IIFE(Immediate invoke function expression)
(function()
{
    console.log("Rosh");
})();
//Generating random number
(function()
{
    let createID=Math.floor(Math.random()*10000)
    console.log(`Your Aadhar card ID is created successfully ${createID}`)
    //secret keys
})();
(function()
{
    let createID=Math.floor(Math.random()*10000)
    console.log(`Your Aadhar card ID is created successfully ${createID}`)
})();
//Leetcode question of callback function and function name is treated as a variable
function mad(){
    console.log("i am mad")
}
function bad(){
    console.log("i am bad")
}
function fun(a,b){
    a()
    b()
}
fun(mad,bad)
//Here mad and bad are passed as a parameter to another function
//fun received functions as a parameters ,so fun is called Higher order function
//2 example
function incr(a){
    return a++;
}
function logic(a,b){
      let x=a+b(5)
      console.log(x)
}
logic(2,incr)
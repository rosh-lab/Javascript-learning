let arr=[1,2,3,4]
let arr2=arr.forEach(function(y){
     return y*2
})
console.log(arr2)
console.log("______________________________")
let arr3=[1,2,3,4]
let arr4=arr3.map(function(y){
     return y*2
})
console.log(arr4)
console.log("-------------------")
//Example:
let arr5=[1,2,3,4]
let arr6=arr5.map(function(a)
{
     return a%2==0
})
console.log(arr6)
console.log("----------------------")
let arr7=[1,2,3,4]
let arr8=arr7.filter(function(a)
{
     return a%2==0
})
console.log(arr8)
//example of some function
arr=[1,2,3,4]
result=arr.some(function(v)
{
    return v%2==0
})
console.log(result)
//Example of every function
arr=[1,2,3,4]
result=arr.every(function(v)
{
    return v%2==0
})
console.log(result)
//Bubble sort:
let group=["Camels","rabbits","lions","tigers","sheeps","cars","rosses","lotus"]
group.sort()
console.log(group)
let x=[1,22,33,4,5,6,7,8,99,988,7,6,45.69]
x.sort()
console.log(x)
console.log(x.sort(function(a,b)
{
    return a-b;//Ascending order
    //b-a: descending order
}))
//By Reduce method:
let rays=[3,4,5,6,]
res=rays.reduce(function(preval,currval){
    return preval+currval
},10)
console.log(res)
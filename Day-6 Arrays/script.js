//Arrays
let marks=[25,36,44,80,43,43];
console.log(marks[0],marks[3],marks[0]+marks[3])
console.log(marks[25])
marks[11]=2000
console.log(marks.length,marks)

let names=[["raj",20],["Ratan",30]]
console.log(names[0][0])

//Array Methods
//1.push() addede the value to the last
let fruits=["banana","apple","guava","mango"]
console.log(fruits)
fruits.push("strawberry","lichi")
console.log(fruits)
fruits.push("dragon")
console.log(fruits)
//2.pop() deleted the value of last
fruits.pop()
fruits.pop()
console.log(fruits)
//3.unshift() added the value at first
fruits.unshift("grapes","watermelon")
console.log(fruits)
//4.shift() used to delete the starting value
fruits.shift()
console.log(fruits)
//5.Splice(starting-index,deletecount,insert values)
arr=[4,5,6,7,10]
arr.splice(2,2,"pari","rosh")
console.log(arr)
arr.splice(4,0,"papa","mummy","bhai","bhen")
console.log(arr)


//Task..
let friends=["sheldon","rachel","ross","monica","joey","stuwart"];
//1 Delete sheldon and add pheobe
//2.delete stuwart and add chandler
//3.add justin between rachel and ross
friends.splice(0,1,"pheobe")
console.log(friends)
friends.splice(5,1,"chandler")
console.log(friends)
friends.splice(2,0,"justin")
console.log(friends)
//6.Reverse()
arr=[4,5,6,7,10]
console.log(arr.reverse())
//7.includes()
arr=[4,5,6,7,10]
console.log(arr.includes(500))
//8.Foreach(callback)
let arr2=[4,3,55,66,78,98];
arr2.forEach(function(val,ind)
{
    console.log(val,ind)
})
//Problem:
let array1=[2,3,4,5,6,7]
let array2=[]
array1.forEach(function(x,ind)
{
    let i=x*x;
    array2[ind]=i;
})
console.log(array2)
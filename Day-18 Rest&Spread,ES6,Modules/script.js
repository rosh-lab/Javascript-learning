//REST and SPREAD 
function fun3(...a){
    console.log(a)
}
fun3(3,4,5,6,7,8,9)
//2 example...
function fruits(a,b,...c){
    const arr=[a,...c,"john"]
    console.log(arr)
}
fruits("apple","mango","banana","papaya","dragon")
//3Example
function fun2(b,c,...a){ //Here ...called as rest operator
    console.log(a);
    let d=[...["john","prasad"],4] //here ...called as spread operator.
    console.log(d);
    // let x=[1,2,3,4,5];
    // [p,...q]=x;
    // let y=[...q,4,5]
}
fun2(3,4,5,6,7,8,9)
//4 example ....Using spread to add two arrays
let arr=[1,2],arr1=[3,4]
let res=[...arr,...arr1]
console.log(res)
//5Example..Array destructuring
let arr2=[5,4,3]
//old way var a=arr[0],b=arr[1],c=arr[2];
//new ways..
let [a1,b1,c1]=arr2
console.log(a1,b1,c1)
//Swap two numbers
function swap(a,b){
    console.log(a+" "+b);
    [b,a]=[a,b];
    console.log(a+" "+b);
}
swap(5,6)
//object destructuring
let obj={
    name:"raj",age:20
}
const{name,age}=obj;
console.log(name,age)
//Export .....
export{name,age}//Normal export
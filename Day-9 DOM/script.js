// console.log(document)
// // console.log(document.getElementById("heading").textContent)
// let x=document.getElementById("heading").textContent
// // x++;
// // console.log(document.getElementById("heading").textContent=x)
// //Selection method of DOM =>>>>
// console.log(document.getElementsByTagName('h1')[0])
// console.log(document.getElementsByClassName('h')[0])
// console.log(document.getElementById('heading'))
// console.log(document.querySelector('.h'))
// console.log(document.querySelectorAll('.h'))
let para=document.getElementById('count')
console.log(para.textContent)
let c=para.textContent
function incr(){
    c++;
    para.textContent=c;
}
function decr(){
    c--;
    para.textContent=c;
}
function reset(){
    para.textContent=0;
}
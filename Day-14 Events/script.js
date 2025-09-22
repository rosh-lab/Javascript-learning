function fun(){
    console.log("hello")
}
document.body.onkeydown=function(e){
    console.log(e.key)
    console.log("You pressed a key")
}
let a=20; b=30;
document.body.onkeydown=function(e){
    console.log(e.key)
    if(e.key=='a'){
        console.log(`Addition of ${a} +${b} =${a+b}`)
    }
    else{
        console.log("press a for addition")
    }
}
const iputEle=document.getElementById('na')
const paragraph=document.getElementById('para')
function makeInput(){
    paragraph.textContent=iputEle.value
}
const sel=document.getElementById("choice")
function makeInput2(){
    paragraph.textContent=sel.value
}
document.getElementById('btn1').addEventListener('click',fun)
document.getElementById('btn2').addEventListener('click',function(){
    console.log("hello guys i am here")
})
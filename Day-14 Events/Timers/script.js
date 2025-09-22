const para=document.getElementById('count');
let c=0;
// setTimeout(function(){
//     c++;
//     para.textContent=c
// },5000)
// for(let i=0; i<1000;i++){
//     console.log("hhello Roshan How are you?")
// }
let myTime=setInterval(function(){
    c++;
    para.textContent=c
    if(c==100){
        clearInterval(myTime)
    }
},50)
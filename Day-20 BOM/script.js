console.log(this)
function display()
{
    console.log("helllo")
}
window.display()
//Get location
window.navigator.geolocation.getCurrentPosition((res)=>console.log(res.coords.latitude,res.coords.longitude),(err)=>console.log(err))
//Button...
// document.getElementById('btn').addEventListener("click",()=>{
//     window.navigator.share("Roshan").then((res)=>console.log(res))
// })
let a='Roshan Aara'
document.getElementById('btn').addEventListener("click",function(){
    window.navigator.mediaDevices.getUserMedia({video:true,audio:true}).then((data)=>{
        document.getElementById('vd').srcObject=data
    })
    let obj={
        name:"raj"
    }
    window.localStorage.setItem('name',a)
    let x=window.localStorage.getItem('name',JSON.stringify(obj))
    console.log(x)
})
//There are two basic storages local storage and session storage
//Local storage are for permanent whereas session storage is untill session only.

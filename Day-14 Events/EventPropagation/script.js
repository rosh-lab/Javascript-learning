document.getElementById('c').addEventListener('click',function(){
    alert("c got clicked")
},true)
document.getElementById('p').addEventListener('click',function(){
    alert("p got clicked")
},true)
document.getElementById('gp').addEventListener('click',function(){
    alert("gp got clicked")
},true)
document.getElementById('buttons').addEventListener('click',function(e){
    console.log(" You clicked " +e.target.textContent)
})
let dateTime=new Date()
setInterval(function(){
    let dateTime=new Date();
    document.querySelector("#container").textContent=dateTime.toLocaleTimeString()},1000)
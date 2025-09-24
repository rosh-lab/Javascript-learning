const containerDiv=document.getElementById('container')
const movieDiv=document.getElementById('movieName')
const button=document.getElementById('btn')
button.addEventListener("click",fetchData);
movieName.addEventListener('input',fetchData)
function fetchData(){
    const url=`http://www.omdbapi.com/?s=${movieName.value}&apikey=9d6db939`
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>displayData(data))
    .catch((err)=>console.log(err))
}
 function displayData(data){
    console.log(data);
    containerDiv.textContent=""
    data.Search.forEach((s)=>{
    const posterDiv=document.createElement('div');
    posterDiv.classList.add('movie')
    const posterImg=document.createElement('img');
    posterImg.src=s.Poster;
    posterImg.alt=s.Title;
    const posterTitle=document.createElement('h2');
    posterTitle.textContent=s.Title;
    const posterYear=document.createElement('p');
    posterYear.textContent=s.Year;
    posterDiv.append(posterImg,posterTitle,posterYear);
    containerDiv.appendChild(posterDiv)
    });
}
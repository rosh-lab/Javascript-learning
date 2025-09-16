function fun(){
//     const para= document.createElement("p")//<p></p>
//     para.textContent= "helllo"// <p> helllo</p>
//     document.body.appendChild(para) //<body><p> helllo</p></body>
// 
   const image= document.createElement('img');
   image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4W8J0_a82Xdc2QeerHXfml0oywotREwXPqw&s"
   image.height="200";
   image.alt="saitama"
   const title= document.createElement('h2')
   title.textContent="one punch man"
   const link= document.createElement('a')
   link.textContent= "CLICK ME TO OPEN THE LINK"
   link.href="https://www.youtube.com/watch?v=GcOne2w7RR4&list=PLHZKGvlIq4BGJIoHktEDfj_NKZcQp5WA4&index=85";
   const card= document.createElement('div')
   card.append(image,title,link);
   document.body.appendChild(card)

}
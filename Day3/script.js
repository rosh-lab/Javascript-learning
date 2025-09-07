function sum()
{
    if(true)
    {
        var A=5; let b=10; const c=20;
        console.log(A+b)
        console.log(b+A,c+A)
    }
    console.log(A)
    
}
sum()
console.log(Math.round(Math.random()*1000000))
let z=10.90;
console.log(z.toString(2),typeof(z))
let y=(z.toString(2))
console.log(y,typeof(y))
let salary=2000; 
let taxPer=70;
console.log(`Amount received after ${taxPer}% for ${salary} is ${salary-(salary*taxPer/100)} `)
let str1="Rroshhann"
console.log(str1.slice(1,4))
console.log(str1.charAt(4))
let h=true;
let k=false;
console.log(h+k)
let x=20;
if (x>5)
{
    console.log(x)
}
let y=30;
//Ternary operator
let p=200; let q=300;
p>q?console.log(true):console.log(false)
//Write a function in js to return whether a person is eligible to vote or not
//Simple if
let age=14;
age>=18?console.log("Eligible to vote"):console.log("Not eligible to vote")
//If else
let aage=14;
if (aage>=18)
{
    console.log("Eligible to vote")
}
else
{
    console.log("Not permitted to vote")
}
//By function concept:
function personage(age){
       if(age>=18)
       {
         console.log("Right to vote")
       }
       else
       {
        console.log("No right to give vote")
       }
}
personage(17)
personage(22)
//If else if ladder...
let name="roshan"
if (name="roshan"){
    console.log("true")
}
else if(name!="roshan")
{
    console.log(false)
}
else ("code is wrong")

{
    console.log("code is wrong try again")
}
//program for print grade of students by the given score using normal function.
function scoreofstudents(score){
    if(score>=90){
        console.log("Grade A")
    }
    else if(score>=80){
        console.log("Grade B")
    }
    else if(score>=70){
        console.log("Grade C")
    }
    else if(score>=40){
        console.log("Grade D")
    }
    else{
        console.log("Grade F")
    }
}
scoreofstudents(0)
scoreofstudents(39)
//WAF  to print day of the week based on number of week starting monday as 1.//Switch case.
function day(num){
  switch(num){
    case 1: console.log("Monday");break;
    case 2: console.log("Tuesday");break;
    case 3: console.log("Wednesday");break;
    case 4: console.log("Thursday");break;
    case 5: console.log("Friday");break;
    case 6: console.log("Saturday");break;
    default:console.log("Sunday");
}
}
day(2)
//try priniting odd number from 20 to 1 in reverse order using while.
let i=19;
while(i>=0){
    console.log(i)
    i-=2;
}
let movies=[
    {
        "title":"koi mil gya"
    },
    {
        "title":"RRR"
    },
    {
        "title":"KGF"
    }
]
for( let x=0; x<movies.length;x++){
    console.log(movies[x].title)
}
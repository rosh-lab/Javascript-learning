//Default constructor..
// class fruits
// {
//     taste;color;
//     constructor()
//     {
//         this.taste="bad"
//         this.color="red"
//     }
// }
// console.log(typeof fruits);
// let obj=new fruits();
// console.log(obj.taste);
// obj.taste="good"
// let obj1=new fruits();
// console.log(obj1.taste);
//Parameterised constructor
class fruits
{
    taste;color;  static c=5;//static value can't be used by object.
    constructor(a,b)
    {
        this.taste=a;
        this.color=b;
    }
    getData()
    {
        console.log(this.taste+ " " +this.color)
    }
}
console.log(typeof fruits);
let obj=new fruits("good","yellow");
obj.getData()
let obj2=new fruits("bad","red");
obj2.getData()
console.log(fruits.c)
//Inheritance .....
class Vegetables extends fruits
{   isHealthy;
    constructor(a,b,c)
    {
        super(a,b)
        this.isHealthy=c;
    }
}
let obj3=new Vegetables("Blue","pink",true)
obj3.getData()
console.log(obj3.isHealthy)

// let arr=[1,2,3,4];

// for(let i of arr){
//     // console.log(i+2);
    
// }

// let myArr=arr.forEach(item=>{
//     return (item+2);
// })

// // console.log(myArr);


// const person = {
//     name: "HP",
//     age: 26
// }

// Object.keys(person).forEach(key=>{
//     console.log(key);
    
// })

// // iterators with callback 
// const numbers=[4,2,3,4];

// function show(number){
// console.log(number)
// }

// numbers.forEach(show)


// // Higher Order Function 1. Take a function as an Argument

// function printHello(){
//     console.log("Hello")
// }

// function display(func){
//     func();
// }

// display(printHello)


// // Higher Order Function 2. Return a function

// function busTicket(amount){
//     return function (vat){
//         return amount+vat;
//     }
// }
// const cost = busTicket(120);
// const totalCost = cost(10);

// console.log(totalCost);



// console.log("Before");
// setTimeout(()=>{
//     console.log("Inner");
    
// },2000);
// console.log("after");


// x = 10;
// console.log(x);

// var x;

//  function hp(){
//      let h = 20;
//      if(1<2){
//         console.log(h);
        
//     }
//     console.log(h);
// }
// // console.log(h)
// hp();
// // console.log(i,"outside");

// const hm = [5,6,7];
// for(let x of hm){
//     x+2;
// }
// hm.forEach(x=>console.log(x+2)
// );

// console.log(hm);

// let val = 0.1+0.2;

// 0.1+0.2==0.3;

// console.log(val);


const promise = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        let randomNumber = Math.floor(Math.random()*10);
        if(randomNumber<5){
            resolve(`Random Number is ${randomNumber} is Accepted`)
        }
        else{
            reject(`Random Number ${randomNumber} is rejected`)
        }
    },1000)
})

promise.then(res=>console.log(res))
.catch(err=>console.log(err)
)

class Car{
    static mywheel= 4;

    constructor(brand,year){
        this.brand = brand;
        this.year = year;
    }

    run(){
        console.log(`${this.brand} is running`);
        
    }
}

const CVR = new Car("CVR", 2015);
CVR.run();
console.log(Car.mywheel);

b = 40;
console.log(b);
let b=20;



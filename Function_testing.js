
// function namedFun() {
//     console.log("I am inside Named Function");
// }
// namedFun();

// let funExp = function(){
//     console.log("I am inside function Expression block");
// }
// funExp();

// let arrowFun = () => {
//     console.log("I am inside Arrow function");
// }
// arrowFun();

// let arrowFun2 = () => console.log("I am inside Arrow function with out curley braces");
// arrowFun2();

// console.log("------ Return Statements in all functions  ------");


// function factorial(num){
//     let fact = 1;
//     while (num >=1 ) {
//         fact *= num;
//         num --;
//     }
//     return fact;
// }
// let result = factorial(5);
// console.log(`(using name function) Factorial of number is ${result}`);



// let factorial2  = function(num){
//     let fact = 1;
//     while (num >=1 ) {
//         fact *= num;
//         num --;
//     }
//     return fact;
// }
// let result2 = factorial2(4);
// console.log(`(using Function expression )Factorial of number is ${result2}`);


// let factorial3  = (num) => {
//     let fact = 1;
//     while (num >= 1 ) {
//         fact *= num;
//         num --;
//     }
//     return fact;
// }
// let result3 = factorial3(6);
// console.log(`(using Arrow Function ) Factorial of number is ${result3}`);

// // Anonymous functions are not hoisted at the top
// // let t = multiplyByFive(7);
// // console.log(t);

// let multiplyByFive  = (num) => num*5; 
// let result4 = multiplyByFive(6);
// console.log(`(using Arrow Function without return) Number multiply by 5 ${result4}`);

// let globalvar = 15;
// function globalContext() {
//     let globalvar = 10;
//     console.log(this.globalvar);
// }
// globalContext();

let a = 10;

function one(){
    console.log(a);
}
function two(){
    a = 5;
    one();
}
two();


// var a = 10;

// let one = function(){
//     console.log("a = " + a);
// }

// let tow = function(){
//     var a = 5;
//     one();
// }

// tow();



// var a = 10;

// let one = ()=>{console.log("a = " + a);}

// let tow = ()=>{var a = 5;one();}

// tow();


// let a = 10;
// function one(){
//  a = 5;
// }
// console.log(a)
// one();
// console.log(a);








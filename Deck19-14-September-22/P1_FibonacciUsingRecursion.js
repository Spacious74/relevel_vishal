// Fibonacci series
// 0 1 1 2 3 5 8 13 21......
console.log("============= Recursive Fibonacci series =================");
function Fibonacci(num){
    if (num < 2) {
        return num;
    }
    else{
        return Fibonacci(num-2) + Fibonacci(num-1);
    }
}

let howManyTerms = 10;
let str = "";
for (let i = 0; i < howManyTerms; i++) {
    str = str + Fibonacci(i) + " ";
}
console.log('Fibonacci series : ' + str);
// In recursive approach there is a problem - 
// Time complexity is exponential beacause Fibonacci() function called two times
// inside the funcition.


// Looping approach basic without recursion
console.log("============= Loop with Array Fibonacci Series =================");
function fibonacciLoop(num){
    let arr = new Array();
    arr[0] = 0;
    arr[1] = 1;

    for(let i = 2; i < num; i++){
        arr[i] = arr[i-2] + arr[i-1];
    }

    return arr;
}
console.log(fibonacciLoop(10));
// In this approach there is also a problem with the space complexity because with every
// iteration we are creating a new array.


// Simple and best approach to solve this problem - 
console.log("============= Simple and Effiecient Fibonacci series =================");
function  fibonacciSimple(num){
    let a = 0; b = 1;
    console.log(a);
    console.log(b);
    let s;
    for(let i = 2; i < num; i++){   
        s = a + b;
        console.log(s);
        a = b;
        b = s;
    }
}
fibonacciSimple(10);

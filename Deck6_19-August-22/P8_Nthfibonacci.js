// Program to print nth element of  Fibonacci series
// Fibonacci series - 0,1,1,2,3,5,8,13,21,34,.... etc.


function giveFibonacci(n) {

    let a = 0,
        b = 1,
        c;
    for (let i = 1; i <= n-2; i++) {

        c = a + b;
        if (i == n-2) {
            console.log(c + " is the " + n + "th element of Fibonacci series");
        }
        a = b;
        b = c;

    }
}

giveFibonacci(8);
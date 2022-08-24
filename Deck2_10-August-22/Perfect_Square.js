 // Program to check if a number is a perfect square or not


 function checkPerfectSquare(num){
    let p = Math.sqrt(num);
    if (num%p == 0) {
        console.log(num + " is perfect square of " + p);
    } else {
        console.log(num + " is not Perfect Square of any Number");
    }
 }

 checkPerfectSquare(574);

// Program to check the number is Armstrong or not
// ARMSTRONG NUMBER = The number which is equal to sum of cube of its digits
// Example -> 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// Some Armstrong numbers are = 153, 370, 371, 407 etc....

function checkArmstrong(num) {
    
    let s=0;
    while (num != 0) {
        
        t = num % 10;
        s = s + (t**3);
        num = parseInt(num/10);

    }
    return s;

}

let n = 370; // You can try another numbers from given above or yourself
let result = checkArmstrong(n);
if(result == n){
    console.log(n + " is Armstrong number");
}
else{
    console.log(n + " is Not Armstrong number");
}


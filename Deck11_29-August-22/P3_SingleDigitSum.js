
function getSumOfDigit(num){
    let n,sum = 0;
    while(num>0){
        n = num%10;
        sum = sum+n;
        num = parseInt(num/10);
    }
    return sum;

}
let digit = 15432;
let result = getSumOfDigit(digit);
console.log("");
console.log(`Sum of digits in ${digit} is ${result}`);
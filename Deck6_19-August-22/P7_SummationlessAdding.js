// Program to find sum of two number using Bitwise operators
// becuse we can't use '+' summation symbol.

function getSum(n1, n2) {
    let num1 , num2;
    num1 = n1;
    num2 = n2;
    while (n2 != 0) {
         
        let carry;
        carry = n1 & n2;
        n1 = n1 ^ n2;
        n2 = carry << 1;
        
    }
    console.log("Sum of " + num1 + " and " + num2 + " is " + n1);
}
getSum(12,14);


// Program to find sum of two number using Bitwise operators
// becuse we can't use '+' summation symbol.

function getSum(a,b) {
    
    let xor, carry;
    xor = a ^ b;
    carry = a & b;
    carry = carry << 1;
    xor = xor ^ carry;
    console.log(xor);
    carry = xor & carry;

}
getSum(12,4);


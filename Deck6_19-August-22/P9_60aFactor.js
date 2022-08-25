// Program to find the number is divisible by 60 or not.

function checkDivisibility(num) {
    let n = num;
    let lastn = num % 10; // get last number 
    let lasttwon = num % 100;
    let sum = 0, threediv;
    while (num > 0) {
        threediv = num % 10;
        sum = sum + threediv;
        num = parseInt(num/10);
    }
    
    // now checking divisibility by 5 in first bracket in if
    // divisibility by 4 in second bracket in if
    // divisibility by 3 in second bracket in if

    if ((lastn == 0 || lastn == 5) && (lasttwon%4 == 0) && (sum % 3 == 0)) {
        console.log(n + " is divisible by 60");
    } else {
        console.log(n + " is Not divisible by 60");
    }

}

checkDivisibility(2340); // You can try different value
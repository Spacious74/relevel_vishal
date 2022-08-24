

function sumOfdigits(num){
    let s=0,t;
    while (num != 0) {

        t = num%10;
        s = s + t;
        num = parseInt(num/10);

    }
    return s;


}

let sum = sumOfdigits(1104); // You can try another numbers
console.log("Sum of Digits : " + sum);
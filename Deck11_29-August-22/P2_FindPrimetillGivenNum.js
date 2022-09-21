function printPrimeNumber(num) {


    for (let a = 2; a <= num; a++) {
        let counter = 0;
        for (let i = 2; i <= parseInt(a/2); i++) {

            if (a % i == 0) {
                counter++;
            }

        }
        if (counter == 0) {
            console.log(a);
        }
    }


}

let n = 25;
console.log("");
console.log("Prime Number till " + n);
printPrimeNumber(n);
// Program to print a particular amount of prime numbers.

function printPrimeNumbers(n) {

    pn = 1;
    while (n > 0) {
        
        let half, counter = 0;
        half = parseInt(pn / 2);
        for (let i = 2; i <= half; i++) {

            if (pn % i == 0) {
                counter++;
            }

        }

        if (counter == 0) {
            console.log(pn);
            n--;
        }

        pn++ ;

    }    


}

printPrimeNumbers(15);
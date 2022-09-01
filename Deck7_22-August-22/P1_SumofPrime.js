function checkPrime(n) {
    let counter = 0;
    for (let i = 2; i <= n / 2; i++) {

        if (n % i == 0) {
            counter++;
        }

    }
    return counter;
}

function getTwoPrimes(num) {
    outer: // labeled break;
    for (let i = 2; i < num; i++) {

        for (let j = 2; j < num; j++) {

            if (i + j == num) {
                let iresult = checkPrime(i);
                let jresult = checkPrime(j);
                if (iresult == 0 && jresult == 0) {
                    console.log(`${i} + ${j} = ${num}`);
                    break outer;
                }
            }

        }

    }

}

getTwoPrimes(10);
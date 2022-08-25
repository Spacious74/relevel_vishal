// Program to find two prime numbers whose sum is equal to given number

function giveTwoPrime(num) {
    
    for (let i = 0; i <= num; i++) {
        
        for (let j = 0; j <= num; j++) {
            
            if (i+j == num) {

                let counteri = 0, counterj = 0;
                let halfi = i/2;
                let halfj = j/2;

                for (let t = 2; t <= halfi; t++) {
                    
                    if (i%t == 0) {
                        counteri ++;
                    }

                }
                for (let t = 2; t <= halfj; t++) {
                    
                    if (j%t == 0) {
                        counterj ++;
                    }

                }
                if (counteri == 0 && counterj == 0) {
                    console.log(i + " " + j + " are two prime whose sum is " + num);
                    return 0;
                }
                
            }

        }
        
    }

}

giveTwoPrime(20);
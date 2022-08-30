
let i,j;

loop1:
    for (let i = 1; i <= 5; i++) {
        
        console.log(`i = ${i}`);

        for (let j = 1; j <= 5; j++) {
            
            if (i === 3) {
                break loop1; // it breaks the whole loop and come out the i loop
            }
            console.log(`j = ${j}`);
            
        }
        
    }
    console.log("I am break point of i loop");
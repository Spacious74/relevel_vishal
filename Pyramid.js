let n = 6; // try different pyramids

for (let i = n; i >=1 ; i--) {

    let row = "", counter = 1;
    
    for (let k = n-1; k >= i; k--) {
        row = row + " ";
        counter++;
    }
    
    t = counter;
    for (let j = 1; j <= i ; j++) {
        row = row + t + " ";        
        t++;
    }
    
    console.log(row);
}

// Program to make a power function

function powerOfNum(num, p){
    
    let r=1;

    for (let i = 1; i <= p; i++) {
        
        r = r * num;
        
    }
    return r;
}

let result = powerOfNum(2, 4);
console.log(result);

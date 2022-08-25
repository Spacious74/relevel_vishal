// Program to make a power function

function powerOfNum(num, p){
    
    let r=1;

    for (let i = 1; i <= p; i++) {
        
        r = r * num;
        
    }
    console.log("Power of " + num + " to the power " + p + " is " + r);
}

powerOfNum(10, 2); //Format - (number , power);


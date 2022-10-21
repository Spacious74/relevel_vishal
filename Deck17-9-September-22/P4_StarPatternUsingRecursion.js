// *
// **
// ***
// ****
// *****

// Printing this pattern using recrsive approach

function printStars(len, i) {
    
    if (i == len+1) {
        return;
    }
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += '*';
    }
    console.log(str);
    return printStars(len, i+1);
    
}
let startingPoint = 1;
printStars(5, startingPoint);
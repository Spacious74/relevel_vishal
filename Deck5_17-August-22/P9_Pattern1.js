
// Program to print pattern -
// *
// **
// ***
// ****
// *****


for (let i = 1; i <= 5; i++) {

    let row = "";

    for (let j = 1; j <= i; j++) {
        
        row = row + "*";
        
    }
    
    console.log(row);
}


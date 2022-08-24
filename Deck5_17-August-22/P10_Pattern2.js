
// Program to print pattern -

//     *
//    ***
//   *****
//  *******
// *********


for (let i = 1; i <= 5; i++) {

    let row = "";

    for (let k = 4; k >= i; k--) {
        row = row + " ";
    }

    for (let j = 1; j <= (2*i)-1 ; j++) {
        row = row + "*";        
    }
    
    console.log(row);
}

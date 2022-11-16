// Printing increasing number till a given number using recursion

function printNumbersTill(n){
    if(n <= 1) {
        console.log(n);
        return;
    }else{
        printNumbersTill(n-1);
        console.log(n);
    }
}
printNumbersTill(10);
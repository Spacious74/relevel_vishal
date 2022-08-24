// Program to check a number is positive or negative using switch case statements .


function checkNumber(num){
    switch (true){
        case (num > 0):
            console.log(num + " is a Positive Number");
            break;
        case (num < 0):
            console.log(num + " is a Negative Number");
            break;
        default:
            console.log(num + " is neither a Positive nor Negative Number");
            break;
    }
}
checkNumber(-10);
// Program to find the sum of digits middle in a number
// example -> 2134 = 6(1+3) , 3265 = 8(2+6)
// A new approach

function sumOfdigits(num) {

    let strnum = String(num); // converting number to string to get no. of digits in num

    let l = (strnum.length) - 1; // subtracting 1 from total no. of digits , here l = 3 because total digits in num is 4

    let firstnum = parseInt(num/(10**l)); // finding first number How ? => dividing original number by 10 to the power l
    // where l contains 3 if total digits in original number is 4
    // so 10 to the power l means 10 power 3 = 1000
    // and now num is divided by 1000 -> 2634/1000 = 2
    // Hence first num = 2; in this case

    let sum = 0;

    num = parseInt(num/10); 

    if (l>1) {
        while (num > 0 && num != firstnum ) {
        
            t = num%10;
            sum = sum + t;
            num = parseInt(num/10);
    
        }    
        console.log("Sum of digits in the middle of "+ strnum + " is " + sum);
    }
    else {
        console.log("Enter 3 digit number atleast to get result ! ");
    }
    
    
    
}

sumOfdigits(2634); // 2634 here you can try another 
// I've explained in comments how it works using number 2634
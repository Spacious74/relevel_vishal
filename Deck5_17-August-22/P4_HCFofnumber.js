// Program to find HCF of two numbers - 

let v1 , v2;
v1 = 25;  // You can try with another values of v1 and v2 to get HCF
v2 = 15;

small = (v1>v2)?v2:v1;
greater = (v1>v2)?v1:v2;

while (greater % small != 0) {

    prevsmall = small;
    small = greater % small;
    greater = prevsmall;
    
}

console.log(small + " is HCF of " + v1 + " and " + v2);

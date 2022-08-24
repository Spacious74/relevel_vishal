
// Program to reverse a string -

let str = "Hello this is Tony Stark"; // You can try with different word or sentence;


let i, newstr = "" ;
for (i = str.length-1; i >= 0; i--) {
    newstr = newstr + str[i];
}
console.log(newstr);
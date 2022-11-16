
// Checking if a String is Palindrome
function checkPalindrome(str){

    let left = 0;
    let right = str.length - 1;
    let isEqual = true;
    while(left < right){
        if(str[left] === str[right]){
            left++; right-- ;
        }else{
            isEqual = false;
            console.log(`${str} : ${isEqual}`);
            return;
        }
    }
    console.log(`${str} : ${isEqual}`);

}
// checkPalindrome("MALAYAL");

// Recursive approach to check palindrome string

function checkPalindromeNow(str, left, right){

    if(left > right){
        return true;
    }
    return str[left] == str[right] && checkPalindromeNow(str, left+1, right-1); 
}
let st = "NAYA";
console.log(checkPalindromeNow(st, 0, st.length-1));

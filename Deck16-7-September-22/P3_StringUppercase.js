// convertin string to uppercase without using any inbuilt function.

function changeToUpperCase(strarr) {


    for (let a = 0; a < strarr.length; a++) {
        let upperCasestr = "";
        for (let i = 0; i < strarr[a].length; i++) {
            upperCasestr += String.fromCharCode(strarr[a].charCodeAt(i) - 32);
        }
        console.log(upperCasestr);
    }

}
let strarr = ['krishna', 'balram', 'hanuman'];
changeToUpperCase(strarr);

function stringtoUpperCase(str) {
    
    let strarr = str.split("");
    let ustr = "";
    for (let i = 0; i < strarr.length; i++) {
        
     let char = strarr[i].toUpperCase();
        ustr = ustr + char;
    }
    console.log(ustr);
}
let str = "vishal";
stringtoUpperCase(str);
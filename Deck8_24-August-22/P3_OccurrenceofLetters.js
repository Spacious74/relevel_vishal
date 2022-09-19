function getOccur(str) {
    
    let arr = str.split("");
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
        }
        else{
            obj[arr[i]] += 1;
        }
    }
    let valArr = Object.values(obj),max = 0,index = -1;
    for (let i = 0; i < valArr.length; i++) {
        if (valArr[i]>max) {
            max = valArr[i];
            index = i;
        }
    }
    console.log(`String is ${str}`);
    console.log(obj);
    console.log(`Maximum occurrence is ${max} of ${Object.keys(obj)[index]}`);

}

let string = 'APPEARANCE';
getOccur(string);
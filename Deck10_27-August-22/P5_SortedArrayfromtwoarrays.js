function sortMulitple(uarr1, uarr2) {
    let tempArr = [];
    let i = 0,
        j = 0,
        t = 0;
    let len =  uarr1.length + uarr2.length;
    while (t < len) {
        if (uarr1[i] > uarr2[j]) {
            tempArr.push(uarr2[j]);
            j++;
        } else {
            tempArr.push(uarr1[i]);
            i++;
        }
        t++;
    }
    return tempArr;
}

let arr1 = [7,9,18,19,22];
let arr2 = [1,6,9,11];

let sortedArray = sortMulitple(arr1, arr2);
console.log(sortedArray);

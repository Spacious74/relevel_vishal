
function reverseArray(array){

    let len = array.length;
    let left = 0;
    let right = len-1;
    while (left<right) {
        let temp;
        temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++ ;
        right-- ;
    }
    return array;

}
let arr = [2,3,4,1,5,6];
console.log(reverseArray(arr));

// second approach

function reverseArray2(array){

    let len = array.length;
    let newarr = [];
    for (let i = len-1; i >= 0; i--) {
        newarr.push(array[i]);
    }
    return newarr;

}
let arr2 = [2,4,1,5,3];
console.log("Second approach");
console.log(reverseArray2(arr2));




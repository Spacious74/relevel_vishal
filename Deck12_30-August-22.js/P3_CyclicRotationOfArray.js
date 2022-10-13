function cyclicRotateArray(array,n) {

    let rotatedArray = [];
    let len = array.length;
    for (let i = len-1; i > (len-1)-n; i--) {
        rotatedArray.push(array[i]);
    }
    for (let i = 0; i < array.length-n; i++) {
        rotatedArray.push(array[i]);
    }
    console.log(rotatedArray);

}
let array = [1,2,3,6,9,8,7,4];
cyclicRotateArray(array,1); // (array, how many cyclic elements you want to rotate)
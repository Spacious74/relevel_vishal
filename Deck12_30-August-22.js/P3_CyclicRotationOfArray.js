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
let array = [6, 5, 4, 7, 8];
cyclicRotateArray(array,2); // (array, how many cyclic elements you want to rotate)
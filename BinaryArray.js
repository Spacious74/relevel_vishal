function arrangeArr(arr, start, right) {
    if (start >= right) {
        return arr;
    }
    let temp;
    if (arr[start] >= arr[right]) {
        temp = arr[start];
        arr[start] = arr[right];
        arr[right] = temp;
        right --;
    }
    else{
        start ++;
    }
    return arrangeArr(arr, start + 1, right - 1);
}
let array = [1, 1, 1, 1, 0, 0, 1]
let n = array.length;
console.log(arrangeArr(array, 0, n - 1));
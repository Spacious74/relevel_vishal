function arrangeArray(arr, left, right) {

    while (left < right) {
        if (arr[left] < 0 && arr[right] > 0) {
            let temp;
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--
        } else if (arr[right] > 0) {
            left++;
        } else if (arr[left] < 0) {
            right--;
        } else {
            left++;
            right--;
        }
    }
    console.log(arr);

}
let array = [-2, -3, 4, -5, 6, -1];
// Expected output = [4,5,6,1,-2,-3]
let len = array.length;
arrangeArray(array, 0, len - 1);
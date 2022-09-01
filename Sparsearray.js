

function shiftNegative(arr) {
    let left = 0,
        right = arr.length - 1;

    while (left < right) {

        if (arr[left] < 0 && arr[right] > 0) {
            let temp;
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left ++;
            right --;
        }
        else if(arr[left] > 0 && arr[right] > 0){
            left ++;
            let temp;
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left ++;
            right --;
        }
        else if(arr[left]<0 && arr[right]<0){
            right--;
            let temp;
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left ++;
            right --;
        }
        else{
            left++;
            right--;
        }
    }


    return arr;
}

console.log(shiftNegative([-1, -2, 10, -7, 3, -4, 5, -6]));
console.log(" <|=||>")
function sortingUsingRecursion(arr, i) {

    if (i == arr.length-1) {
        return arr;
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }

    }
    return sortingUsingRecursion(arr,i+1)
}

let arr = [4, 2, 5, 3, 1, 6];
console.log(sortingUsingRecursion(arr, 0));
function minMaxfromArray(array) {

    let min = array[0], // 12
        max = array[1];


    if (arr[0] > arr[1]) {
        max = array[0];
        min = array[1];
    } else {
        max = array[1];
        min = array[0];
    }
    for (let i = 2; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
            console.log(`min = ${min}`);
        } else if (max < array[i]) {
            max = array[i];
            console.log(`max = ${max}`);
        }
    }
    console.log(`Minimum = ${min} Maximum = ${max}`);

}
let arr = [12, 1, 5, 3, 13, 6]
minMaxfromArray(arr);
function mularr(arr) {
    let i, newarr = [];
    for (i = 0; i < arr.length ; i++) {
        if (i == 0) {
            newarr.push(arr[i+1] * arr[i]);
        } else if(i == arr.length-1) {
            newarr.push(arr[i-1] * arr[i]);
        }
        else{
            newarr.push(arr[i-1] * arr[i+1]);
        }
    }
    return newarr;
}
let result = mularr([2, 3, 4, 5, 6]);
console.log(result);
function getProfit(arr) {
    let maxp = 0;
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] > arr[i-1]) {
            maxp += arr[i] - arr[i-1];
        }    
    }
    return maxp;
}
let array = [100, 180, 260, 310, 40, 535, 695]
let result = getProfit(array);
console.log(result);
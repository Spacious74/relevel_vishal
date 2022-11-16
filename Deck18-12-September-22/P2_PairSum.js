// SORTING METHOD TO FIND PAIR OF TARGETED SUM.

function findPairSum(arr, sum) {

    let sortedArr = arr.sort((a,b) => a-b);
    console.log(sortedArr);
    console.log("Targeted Sum : " + sum);

    let left = 0; 
    let right = sortedArr.length - 1;

    // [10,10,20,40,50,70]

    while (true) {
        if (sortedArr[left] + sortedArr[right] == sum && left != right) {
            console.log("Values : " + sortedArr[left], sortedArr[right]);
            console.log("Indexes of Values : " + left, right);
            break;
        } else if (sortedArr[left] + sortedArr[right] < sum) {
            left++;
        } else if (sortedArr[left] + sortedArr[right] > sum) {
            right--;
        } else {
            console.log("Pair not found in given array"); break;
        }

    }
    
}
let arr = [10, 20, 10, 40, 50, 70];
let sum = 60;
findPairSum(arr, sum);


// function sumOfPair(nums, target_num) {
//     var map = [];
//     var indexes = [];
//     for (var idx = 0; idx < nums.length; idx++) {
//         if (map[nums[idx]] != null) {
//             var index = map[nums[idx]];
//             indexes[0] = index;
//             indexes[1] = idx;
//             break;
//         } else {
//             map[target_num - nums[idx]] = idx;
//         }
//     }
//     return indexes;
// }
// console.log(sumOfPair([10, 20, 10, 40, 50, 60, 70], 30));
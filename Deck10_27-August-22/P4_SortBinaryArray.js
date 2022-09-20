function sortBinaryArray(array) {
    let len = array.length;
    let left = 0;
    let right = len - 1;
    while (left <= right) {
        if (array[left] == 0) {
            left++;
        } else {
            let temp;
            temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            right--;
        }
    }
    return array;
}

let binarr =[0,1,1,0,0,1,0,0,1,0,1];
console.log(sortBinaryArray(binarr));

// Sir's Program
// (function(){
//     //  [1,0,0,1,1,0,1]
//     // arr[left] = 1, arr[right] = 1
//     function sortZeroOne(arr, n){
//         let left = 0, right = n - 1, temp;
//         let count = 0;
//         while(left <= right){
//             count++;
//             if(arr[left] >= arr[right]) {
//                 temp = arr[left];
//                 arr[left] = arr[right];
//                 arr[right] = temp;  //[1,0,0,1,1,0,1]
//                 right--; 
//             } else{
//                 left++;
//             }
//         }

//         return arr;

//     }
//     let arr = [0,1,1,0,0,1,0,0,1,0,1];  
//     console.log(sortZeroOne(arr, arr.length))

// })();

// Recursive approach to check the array is sorted or not.

function checkArrayIsSorted(arr, i){

    if(arr.length-1 == i){
        return true;
    }
    return  checkArrayIsSorted(arr, i+1) && (arr[i] <= arr[i+1]);


}
let arr = [1,7,3,6,5];
console.log(checkArrayIsSorted(arr,0));
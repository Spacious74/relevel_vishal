function reverseArr(arr,start,right){

    if(start >= right){
        return arr;
    }
    let temp ;
    temp = arr[start];
    arr[start] = arr[right];
    arr[right] = temp;

    return reverseArr(arr, start+1 , right-1);
}
let array = [2,4,5,3,8,7]
let n = array.length;
console.log(reverseArr(array, 0 , n-1));


function rearrangeArray(array){

    let left = 0;
    let right = array.length-1;
    while (left <= right) {
        if (array[left] < 0 && array[right]>0) {
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++; right--;
        }
        else if(array[left] > 0 && array[right] > 0){
            left++;
        }
        else if(array[left] < 0 && array[right] < 0){
            right--;
        }
        else{
            left++; right--;
        }
    }
    console.log(array);

}
let array = [-5,3,-4,88,-9,-10,21,5,-6];
rearrangeArray(array);
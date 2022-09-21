
function sortBinaryArray(array) {
    
    let left  = 0;
    let right = array.length - 1;
    while (left <= right) {
        if (array[left] > array[right]) {
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++ ; right-- ;
        }
        else if(array[left] == 0 &&  array[right] == 0 ){
            left++ ;
        }
        else if(array[left] == 1 &&  array[right] == 1 ){
            right-- ;
        }
        else{
            left++ ; right-- ;
        }
    }
    console.log(array);
}
let array = [1,1,0,1,0,0,1];
sortBinaryArray(array);
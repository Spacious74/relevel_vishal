
function findPositiveAndNegativeElements(arr){

    let negarr = [];
    let posarr = [];
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] < 0) {
            negarr.push(arr[i]);
        } else {
            posarr.push(arr[i]);
        }
        
    }
    console.log(`Positive Elements ${posarr}`);
    console.log(`Negative Elements ${negarr}`);
    return;

}
let arr = [1, -2, 3, -5, 7, -3, 9, 30, -23];
findPositiveAndNegativeElements(arr);

function getSmallestno(arr){

    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]<min) {
            min = arr[i];
        }
    }
    return min;

}
let array = [ 2, 22, 43, 65, 32, 12 ];
let result = getSmallestno(array);
console.log("");
console.log(`Smallest Number : ${result}`)
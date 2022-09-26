function convertin2D(arr) {

    let matrix = [];
    let c = 0;          //    2
    for (let i = 0; i < parseInt(arr.length / 5); i++) {

        let subarr = [];
        for (let j = 0; j < 5; j++) {
            subarr.push(arr[c]);
            c++;
        }
        matrix.push(subarr);

    }

    console.log(matrix);
}
let array = [2, 3, 4, 5, 6, 4, 9, 3, 8, 7];
// Expected output - 
// [
//   [2,3,4,5,6],
//   [4,9,3,8,7]
// ]
console.log("");
console.log("Array in 1d -")
console.log(array);
console.log("");
console.log("Array In 2d - ")
convertin2D(array);
// Incompelete yet...
function getSecondSmallestNumber(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - i; j++) {

            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[ j+1 ];
                arr[j+1] = temp;
            }

        }

    }
    
    return arr[1];

}

let arr = [11, 34, 54, 22, 13, 78];
let result = getSecondSmallestNumber(arr);
console.log(`${result} is Second Smallest Number `);
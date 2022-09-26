
function findUniqueRowinMatrix(matrix){

    let rowlen = matrix[0].length;
    let counter = 0;
    for (let i = 0; i < rowlen; i++) {
        
        let unique = true, uniqueRow ;
        let obj = {};
        let arr = matrix[i];
        for (let j = 0; j < arr.length; j++) {
            
            if(!obj[arr[j]]){
                obj[arr[j]] = 1;
            } else{
                obj[arr[j]] = obj[arr[j]] + 1;
            }
            
        }
        for (let key in obj) {
            if (obj[key] > 1) {
                unique = false;
            }
        }
        if (unique == true) {
            counter = 1;
            console.log(i + " indexed row is unique");
        }

    }
    if (counter == 0) {
        console.log("Unique Row does not exist");
    }


}
let matrix = [
    [1, 2, 3, 3],
    [4, 5, 6, 7],
    [7, 8, 8, 8],
    [7, 9, 10, 10]
];
console.log("");
findUniqueRowinMatrix(matrix);
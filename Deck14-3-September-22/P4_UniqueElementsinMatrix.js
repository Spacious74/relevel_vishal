
function findUniqueElementsInMatrix(matrix){

    let rowlen = matrix[0].length;
    let obj = {};
    let counter = 0;
    for (let i = 0; i < rowlen; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!obj[matrix[i][j]]) {
                obj[matrix[i][j]] = 1;
            }
            else{
                obj[matrix[i][j]] = obj[matrix[i][j]] + 1;
            }
        }
    }
    
    for (let key in obj) {
       if (obj[key] == 1) {
            console.log(key);
            counter = 1;
       }
    }
    if (counter == 0) {
        console.log("");
        console.log("Not any Unique element found");
    }

}

let matrix = [
    [2, 14, 15, 18],
    [10, 18, 14, 22],
    [8, 21, 22, 15],
    [10, 14, 21, 28]
];
console.log("");
console.log("Unique Elements are : ")
findUniqueElementsInMatrix(matrix);
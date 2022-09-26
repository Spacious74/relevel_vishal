function checkForDiagonal(matrix){


    let rowlen = matrix[0].length;
    for (let i = 0; i < rowlen; i++) {
        for (let j = 0; j < rowlen; j++) {
            if (i != j) {
                if (matrix[i][j] > 0) {
                    return false;
                }
            }
        }
    }
    return true;

}

let matrix = [
    [5, 0, 0, 0],
    [0, 6, 0, 0],
    [0, 0, 7, 0],
    [0, 0, 0, 8]
];
console.log("");
console.log(checkForDiagonal(matrix) + " This is Diagonal Matrix");
function sumofDiagonalBoundary(matrix) {


    let rowlen = matrix[0].length;
    let i = 0;
    let col = rowlen - 1;
    // For Printing Both Diagonals
    // for (let j = 0; j < rowlen; j++) {
    //     console.log(matrix[i][j] + " " + matrix[i][col]);
    //     i++;
    //     col--;
    // }
    let sum = 0;

    // For Printing Both Diagonals second approach
    for (let i = 0; i < rowlen; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (i == j || (i + j) == col) {
                sum = sum + matrix[i][j];
            }

        }
    }
    console.log("");
    for (let i = 0; i < rowlen; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (i  == 0 || i == col) {
                sum = sum + matrix[i][j];
            }
            else if (j  == 0 || j == col) {
                sum = sum + matrix[i][j];
            }
        }
    }
    console.log("");
    let cornersum = matrix[0][0] + matrix[0][col] + matrix[col][0] + matrix[col][col];
    console.log((sum - cornersum) + " is the Sum of Diagonal and Boundary Elements ")
}

let matrix = [
    [1, 2, 3, 4, 5],
    [20, 6, 7, 8, 9],
    [16, 10, 11, 12, 13],
    [8, 14, 15, 16, 10],
    [11, 17, 18, 19, 15],
];
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
sumofDiagonalBoundary(matrix);

// Expected Output = 226
// Note - You can not add that element which is already added either in diagonal or boundary.
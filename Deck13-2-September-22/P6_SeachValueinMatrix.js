
function findValueinMatrix(matrix,val){

    let rowlen = matrix[0].length;

    for (let i = 0; i < rowlen; i++) {
            if (val >= matrix[i][0] && val <= matrix[i][rowlen-1]) {
                for (let j = 0; j < matrix[i].length; j++) {
                    if (val == matrix[i][j]) {
                        console.log("Your value is in row " + (i+1) );
                        console.log(matrix[i][j])
                    }
                }
            }
    }
}
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
findValueinMatrix(matrix, 10);

function waveMatrix(matrix){

    let rowlen = matrix[0].length;
    let col = 0;
    let dir = 0;

    while (col < rowlen) {
        
        if (dir == 0) {
            for (let i = 0; i < matrix.length; i++) {
                console.log(matrix[i][col]);
            }
            col++;
            dir++;
        }else if (dir == 1){
            for (let i = matrix.length-1; i >= 0; i--) {
                console.log(matrix[i][col]);
            }
            col++;
            dir--;
        }
    }

}
// Expected output in wave form-
// 1, 5, 9, 13, 14, 10, 6, 2, 3, 7, 11, 15, 16, 12, 8, 4
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
waveMatrix(matrix);
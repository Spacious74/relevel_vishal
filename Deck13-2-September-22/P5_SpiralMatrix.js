function printMatrixInSpiralForm(matrix) {

    let rowlen = matrix[0].length;
    let top = 0,
        down = rowlen - 1,
        left = 0,
        right = rowlen - 1,
        dir = 0;

    while (top <= down && left <= right) {
        if (dir == 0) {

            for (let i = left; i <= right; i++) {
                console.log(matrix[top][i]);
            }
            top++;

        } else if (dir == 1) {

            for (let i = top; i <= down; i++) {
                console.log(matrix[i][right]);
            }
            right--;

        } else if (dir == 2) {

            for (let i = right; i >= left; i--) {
                console.log(matrix[down][i]);
            }
            down--;

        } else if (dir == 3) {

            for (let i = down; i >= top ; i--) {
                console.log(matrix[i][left]);
            }
            left++ ;
        }
        dir = (dir + 1)%4;
    }
}
// Expected Output
// 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
printMatrixInSpiralForm(matrix);

function findMaximumElement(matrix){

    let rowlen = matrix[0].length;
    for (let i = 0; i < rowlen; i++) {
        let max = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > max) {
                max = matrix[i][j];
            }
        }
        console.log(`${max} is large in ${i+1} row`);
    }

}
let matrix = [
    [1, 12, 3, 4],
    [5, 6, 27, 8],
    [9, 14, 11, 12],
    [13, 14, 18, 16]
];

findMaximumElement(matrix);
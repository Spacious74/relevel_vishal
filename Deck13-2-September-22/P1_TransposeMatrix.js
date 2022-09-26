function transposeMatrix(matrix) {

    let rowlen = matrix[0].length;

    console.log("");
    console.log("Matrix Before Transpose - ");
    for (let i = 0; i < rowlen; i++) {
        let str = "";
        for (let j = 0; j < matrix[i].length; j++) {
            str = str + matrix[i][j] + " ";
        }
        console.log(str);
    }

    for (let i = 0; i < rowlen; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (i > j) {
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }

        }
    }
    console.log("");
    console.log("Transposed Matrix - ");
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

transposeMatrix(matrix);
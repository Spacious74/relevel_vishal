function multiplyMatrix(m1, m2) {

    // Expected Output
    //  [ 26, 16, 28 ]
    //  [ 56, 40, 64 ]
    //  [ 86, 64, 100]

    let rowlen = matrix1[0].length;
    let ans = [[],[],[]];

    for (let i = 0; i < rowlen; i++) {

        for (let j = 0; j < rowlen; j++) {

            let sum = 0;
            for (let k = 0; k < rowlen; k++) {
                sum = sum + (m1[i][k] * m2[k][j]);
            }
            ans[i][j] = sum;
        }
    }

    console.log("");
    console.log("Mulitiplied Answer - ");
    for (let i = 0; i < rowlen; i++) {
        let str = "";
        for (let j = 0; j < ans[i].length; j++) {
            str = str + ans[i][j] + " ";
        }
        console.log(str);
    }

}

let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let matrix2 = [
    [1, 2, 1],
    [2, 4, 6],
    [7, 2, 5]
];
multiplyMatrix(matrix1, matrix2);
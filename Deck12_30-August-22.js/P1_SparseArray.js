function checkForSparseMatrix(matrix) {

    let rowlen = matrix[0].length;
    let counter = 0;
    for (let i = 0; i < rowlen; i++) {
        
        for (let j = 0; j < matrix[i].length; j++) {
            
            if (matrix[i][j] == 0) {
                counter++;
            }
            
        }
        
    }
    let totalelements = rowlen * rowlen;
    if (counter > parseInt(totalelements/2)) {
        console.log('Sparse Matrix');
    }
    else{
        console.log('Not Sparse Matrix');
    }
}

let  matrix = [
    [1,0,15,0],
    [7,0,0,22],
    [0,0,0,0],
    [10,0,0,28]
]

checkForSparseMatrix(matrix);
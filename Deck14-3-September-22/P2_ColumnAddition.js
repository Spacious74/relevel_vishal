function addColumnElements(matrix) {
    
    let rowlen = matrix[0].length;
    let col = 0;
    while(col < rowlen){

        let sum = 0;
        for (let j = 0; j < matrix.length; j++) {
            sum = sum + matrix[j][col];
        }
        console.log(` Sum of ${col} column is ${sum}`);
        col++ ;

    }

}

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 1, 8],
    [9, 3, 2, 1],
    [3, 5, 4, 6]
//   18 16 10 19  Expected Ouput
];
addColumnElements(matrix);
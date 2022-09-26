
function rotateMatrix90degAntiC(matrix){

    let rowlen = matrix[0].length;

    console.log("");
    console.log("Matrix Before Rotation - ");
    for (let i = 0; i < rowlen; i++) {
        let str = "";
        for (let j = 0; j < matrix[i].length; j++) {
            str = str + matrix[i][j] + " ";
        }
        console.log(str);
    }

    // Transposing Matrix
    for (let i = 0; i < rowlen; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            
            if (i>j) {
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }   

        }
    }
    
    // Swapping Last Row with First Row and so on....
    for (let i = 0; i < parseInt(rowlen/2); i++) {
        for (let k = 0; k <  matrix[i].length; k++) {
            let temp = matrix[i][k];
            matrix[i][k] = matrix[(rowlen-1)-i][k];
            matrix[(rowlen-1)-i][k] = temp;
        }
    }

    // Printing Rotated Matrix
    console.log("");
    console.log("Anti-Clickwise 90deg Rotated Matrix - ");
    for (let i = 0; i < rowlen; i++) {
        let str = "";
        for (let j = 0; j < matrix[i].length; j++) {
            str = str + matrix[i][j] + " ";
        }
        console.log(str);
    }

}

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
rotateMatrix90degAntiC(matrix);
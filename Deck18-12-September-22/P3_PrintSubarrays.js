function printSubArrays(arr) {
    for (let k = 0; k < arr.length; k++) {
        for (let i = k; i < arr.length; i++) {
            let start = k;
            let stop = i;    
            let tempArr = [];
            for (let j = start; j <= stop; j++) {
                tempArr.push(arr[j]);
            }
            console.log(tempArr);   
        }   
    }
}
printSubArrays([1, 2, 3,4]);

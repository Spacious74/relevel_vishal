function findIntersection(arr1, arr2){

    let obj = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!obj[arr1[i]]) {
            obj[arr1[i]] = 1;
        } else {
            obj[arr1[i]] += 1;
        }
    }
    console.log(obj);
    let uniqueArr1 = Object.keys(obj).map((value) => Number(value));
    console.log(uniqueArr1);

    for (let i = 0; i < arr2.length; i++) {
        
        
        
    }

}
findIntersection([1,2,3,3,4,5,6],[3,3,5]);
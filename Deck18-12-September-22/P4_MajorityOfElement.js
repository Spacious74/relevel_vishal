function findMajority(arr){

    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]] += 1;
        }
        
    }
    let majority = parseInt(arr.length/2);

    let isMajor = false;
    for (const key in obj) {
        if (obj[key] > majority) {
            console.log(key);
            isMajor = true;
            break;
        }
    }

    if (isMajor === false) {
        console.log("Element not found");
    }

}
findMajority([3,1,2,3,2,2,2,2]);
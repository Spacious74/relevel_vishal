function findUniqueElementInArray(arr){

    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
        }else{
            obj[arr[i]] += 1;
        }
    }
    console.log(arr);
    let noofUniqueElements = 0;
    let uniqueArr =[];
    for (let key in obj) {
        if (obj[key] == 1) {
            noofUniqueElements++;
            uniqueArr.push(key);
        }
    }
    console.log("Number of Unique Elements found : " + noofUniqueElements);
    console.log("Elements are : " + uniqueArr);

}
findUniqueElementInArray([3,2,1,2,3,6]);
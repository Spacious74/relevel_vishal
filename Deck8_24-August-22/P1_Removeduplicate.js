function removeDuplicate(arr) {
    
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        
        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]] += 1;
        }
        
    }
    return Object.keys(obj);

}
let array = ['a','b','c','a','c','e','d','a'];
console.log(removeDuplicate(array));
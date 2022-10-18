let arr = ['z','a','c','b','l'];
console.log("");
console.log("Array before Sorting - ");
console.log(arr)
console.log("");
console.log("Array after sorting -");
let sortedArr = arr.sort((a,b) => b.localeCompare(a));
console.log(sortedArr);
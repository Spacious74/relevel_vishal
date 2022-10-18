let arr = [1,2,2,4,5];
let multi = 1;
let result = arr.map(function(value) {
    multi*=value;
});
console.log(multi);
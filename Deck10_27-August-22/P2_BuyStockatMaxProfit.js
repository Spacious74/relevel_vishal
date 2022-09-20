
function getProfit(array) {
    
    let maxProfit = array[0];
    let minPrice = array[0];
    let TotalmaxProfit = 0
    let len = array.length;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >  maxProfit) {
            maxProfit = array[i];
        }
        if(array[i+1] < array[i]){
            TotalmaxProfit = TotalmaxProfit + (maxProfit - minPrice); //200 at 1st iteration
            minPrice = array[i+1];
            maxProfit = array[i+1];
        }
        if(i == len-1){
            TotalmaxProfit = TotalmaxProfit + (maxProfit - minPrice);
        }
    }
    
    return TotalmaxProfit;

}

let arr = [100,180,60,310,40,535,695];
let result = getProfit(arr);
console.log("");
console.log(`Total Maximum Profit : ${result}`);
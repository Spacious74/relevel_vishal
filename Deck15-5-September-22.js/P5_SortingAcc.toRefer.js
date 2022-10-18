const customSort = (order, arr) => {
    const numberObj = {};
    const resArr = [];
    order.split('').map((item, index) => {
        numberObj[item] = {
            value: [],
            order: index
        };
    })
    arr.map(item => {
        numberObj[item].value.push(item);
    });
    const sortedObj = Object.values(numberObj).sort((a, b) => (a.order > b.order) ? 1 : -1);
    Object.values(sortedObj).map(item => {
        resArr.push(...item.value)
    });
    return resArr.join(' ');
}

const order = '2356481790'; // sort array acording to this order.

const arr = [1, 2, 9, 3, 1, 5, 6, 2, 8, 9, 0];
console.log(customSort(order, arr));
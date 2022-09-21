function findLongestConsecutiveSequence(array) {

    let sortedArray = array.sort((a, b) => a - b);
    console.log("");
    console.log(sortedArray);
    let counter = 0,
        max = 0;
    for (let i = 0; i < sortedArray.length; i++) {

        if (sortedArray[i]+1 == sortedArray[i+1]) {
            counter++;
            if (counter >= max) {
                max = counter;
            }
        } else {
            counter = 0;
        }
        
    }
    console.log(`${max + 1} Longest Consecutive Sequence present in the array.`)
}

let array = [35, 3, 4, 7, 88, 9, 10, 21, 5, 6];
findLongestConsecutiveSequence(array);
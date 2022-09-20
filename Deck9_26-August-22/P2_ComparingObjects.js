let obj1 = {
    name : "Vishal",
    age : 20
    
}
let obj2 = {
    name : "Bro",
    age : 28
    // city : "Kanpur"
}
let counter = 0;
let keyarr1 = Object.keys(obj1);
for (let key in obj1) {
    if (obj1[key] == obj2[key]) {
        counter ++;
    }
}
if (counter == keyarr1.length) {
    console.log("Both Objects are equal")
} else {
    console.log("Both Objects are Not equal")
}
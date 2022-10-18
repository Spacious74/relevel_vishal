function sortObjectArray(objArr) {

    for (let i = 0; i < objArr.length; i++) {
        
        for (let j = 0; j < objArr.length-i-1; j++) {
            if (objArr[j].id > objArr[j+1].id) {
                let temp = objArr[j];
                objArr[j] = objArr[j+1];
                objArr[j+1] = temp;
            }
        }
        
    }
    console.log(objArr);

}

let objArr = [
    {
        id: 9, name: "Ram"
    },
    {
        id: 5, name: "Krishna"
    },
    {
        id: 7, name: "Shiv"
    },
    {
        id: 2, name: "Rudra"
    },
    {
        id: 6, name: "Pawan"
    }
];
console.log("");
console.log("Object's Array before Sorting -");
console.log(objArr);
console.log("");
console.log("Object's Array After Sorting -");
sortObjectArray(objArr);



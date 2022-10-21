let student =[
    {
        name : "Krishna",
        grades : 100,
    },
    {
        name : "Balram",
        grades : 80,
    },
    {
        name : "Hanuman",
        grades : 70,
    }
]

let highestgrade = 0;
let studentname = "";
for (let i = 0; i < student.length; i++) {

    if(student[i].grades > highestgrade){
        highestgrade = student[i].grades;
        studentname = student[i].name;
    }

}
console.log("Highest grade is - ");
console.log(`${studentname} : ${highestgrade}`);
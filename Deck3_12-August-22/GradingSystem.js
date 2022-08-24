
// Program to give grades according to marks of student using nested if else

function giveGrades(marks){
    
    if (marks >= 90 && marks<=100) {
        grade = 'A';
    }
    else if(marks <= 100){
        if (marks >= 80) {
            grade = 'B';
        }
        else{
            if (marks >= 60) {
                grade = 'C';
            }
            else{
                if (marks >= 33 ) {
                    grade = 'D'
                }
                else if(marks >= 0){
                    grade = 'F';
                }
                else{
                    grade = 0;
                }
            }
        }
    }
    else{
        grade = 0;
    }
    return grade;
 }

 let myGrade = giveGrades(-10); // You can try different values from here

 if(grade != 0){
     console.log("You've got Grade " + myGrade);
 }
 else{
    console.log("You've entered wrong marks out of 100");
 }
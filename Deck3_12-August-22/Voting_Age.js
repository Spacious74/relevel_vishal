// Program to check a user is eligible to vote or not if age is greater than 18


 function checkAge(age){
    
    if (age>18 && age<100) {
        console.log("Age : " + age + " You can Vote");
    } 
    else if(age < 18) {
        console.log("Age : " + age + " You can Not Vote ! Must be more than 18");
    }
    else{
        console.log("You Entered Wrong Age Try Again !");
    }
 }

 checkAge(74);
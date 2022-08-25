// Program to find LCM of tow numbers 

function getLcm(n1,n2){
    let i=2,oldgreater;
    let smaller = (n1<n2)?n1:n2;
    let greater = (n1>n2)?n1:n2;
    oldgreater = greater;
    
    if (greater % smaller == 0) {
        console.log("LCM of " + n1 + " and " + n2 + " is " + greater );
    } 
    else{
        while (greater % smaller != 0) {
           greater = oldgreater * i ;
           i++;
        }
        console.log("LCM of " + n1 + " and " + n2 + " is " + greater);
    }

}

getLcm(12,16); // You can try different values

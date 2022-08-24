// Program to check largest among three numbers

function giveLargeVal(n1,n2,n3){
    
    if (n1>n2 && n1>n3) {
        console.log(n1 + " is Greater Number");
    }
    else if (n2>n1 && n2>n3){
        console.log(n2 + " is Greater Number");
    }
    else if (n3>n1 && n3>n2){
        console.log(n3 + " is Greater Number");
    }
    else{
        console.log("All numbers are Equal");
    }
    
 }

 giveLargeVal(-9,0,2); // You can try different values from here
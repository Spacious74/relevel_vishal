// Program to check order of three numbers -

function checkOrder(n1,n2,n3){
    
    if (n1<n2 && n2<n3) {
        console.log(n1 + " " + n2 + " " + n3 + " are in Increasing order");
    }
    else if (n1>n2 && n2>n3){
        console.log(n1 + " " + n2 + " " + n3 + " are in Decreasing order");
    }
    else{
        console.log(n1 + " " + n2 + " " + n3 + " are Not in Any Order");
    }
    
 }

 checkOrder(10,9,12); // You can try different values from here
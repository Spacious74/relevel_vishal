// A man reaches his office 'y' min late if he travels at 'x' kmph. 
// if he travels with 'x+2'kmph then he reaches office 'y-10' min .
// then we have to calculate distance between his home and office.


function giveDistance(x,y) {

    let d = ((y - 5) * x * (x+2))/60;
    console.log("Distance between the office and home is : "+d + "km");
    
}
giveDistance(4,20);

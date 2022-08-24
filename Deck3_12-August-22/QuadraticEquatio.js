// Program to find the roots of quadratic equation if value of a,b and c is given from equation [ ax² + bx + c ] .

function rootsOfEquation(a,b,c) {
    let dis ;
    dis = (b**2) - (4*a*c);
    if (dis > 0) {
        let r1,r2;
        r1 = ((-1*b) + dis)/(2*a);
        r2 = ((-1*b) - dis)/(2*a);
        console.log(r1 + " and " + r2 + " are Roots of the given Equation : " + a + "x²" + " + " + b + "x" + " + " + c)
    } else if (dis == 0){
        let r;
        r = (-1*b)/(2*a);
        console.log(r + " and " + r + " are Roots of the given Equation : " + a + "x²" + " + " + b + "x" + " + " + c)
    }
    else{
        console.log("Not found Real roots of the given equation : " + a + "x²" + " + " + b + "x" + " + " + c);
    }

}

rootsOfEquation(1,8,12);
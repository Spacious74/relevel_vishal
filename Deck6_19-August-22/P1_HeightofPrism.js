// Program to find the height of prism if radius of circle, perimeter of triangular base and 
// Volume of triangle is given

// We know Area of triangle = 1/2 * base * hieght; Volume of Prism = Area of Base triangle * Height of Prism;
// So, Height of Prism = Volume of Prism / Area of Triangle ;
// In this case an incircle is given inside triangle base so, formula of area of triangle becomes radius * semiperimeter of traingle

function heightOfPrism(radius, perimeter, volume) {
    
    let area , height;
    area = radius * (perimeter/2);
    height = volume / area;
    return height;

}

let result = heightOfPrism(3, 15, 270);
console.log("Height of Prism : " + result + " cm");



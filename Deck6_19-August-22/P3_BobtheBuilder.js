// Bob needs your help in deciding how many bricks are needed for constructing 
// a wall of lenght L meter , height H meter and thickness T meter
// if 15% of the wall is filled with mortar and the dimension of 
// 1 brick is 24*12*8cm

function noOfBricks(l,b,h){

    let l_brick = 24/100;
    let b_brick = 12/100;
    let h_brick = 8/100;
    let volume_brick = l_brick * b_brick * h_brick;
    let volume_wall = l * b * h;

    let number_brick =  0.85 * (volume_wall/volume_brick);
    console.log("Number of Bricks required to build the wall : " + Math.round(number_brick));

}

noOfBricks(24,8,1);
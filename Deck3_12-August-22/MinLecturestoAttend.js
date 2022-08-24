// Program to find how many lectures user have to attend to get 75% attendance if 
// Total lectures and Number of lectures attended by the user is given -

function attendLectures(total, attended) {

  if (attended <= total) {
    let p = Math.ceil(0.75 * total);
    if (attended >= p) {
      lecture = 0;
    } else {
      lecture = p - attended;
    }
  } else {
    lecture = -1;
  }
  return lecture;
}

let l = attendLectures(100, 101); // ( Total lectures happened , Attended lectures by user )
if (l != -1) {
  console.log("You have to attend " + l + " to get 75% attendance");
}
else{
  console.log("You've given wrong attandance Try again !");
}
// 1. Program to decide student have to play or not according to temperature and raining

function checkplay(temp, raining){
    if(temp > 20 && temp < 25 && raining == false){
        console.log("You can go outside to play")
    }
    else if (temp > 18 && temp < 20 && raining == true){
        console.log("You can play in school outside");
    }
    else{
        console.log("You can not go outside to play");
    }
}
checkplay(23, true); // (What is the temperature , Raining = ture or Not raining = false)
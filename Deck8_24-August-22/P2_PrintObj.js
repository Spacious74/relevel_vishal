function car(color, speed, brand) {
    
    this.color = color;
    this.speed = speed;
    this.brand = brand;
    this.start = function() {
        console.log("Starting the car");          
    }
    this.stop = function() {
        console.log("Stopping the car");
    }
}

let car1 = new car('Black','120Kmph','Audi');
let car2 = new car('Red','150Kmph','BMW');

console.log(`My car is ${car1.brand} and color is ${car1.color} with speed of ${car1.speed}`);
console.log(`My car is ${car2.brand} and color is ${car2.color} with speed of ${car2.speed}`);
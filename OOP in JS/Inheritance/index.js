class Vehicle{
    move(){
        console.log('The Vehicle is Moving Forward');
    }
}
class Car extends Vehicle{
    honk(){
        console.log("Beep Beep");
    }
}

const mycar = new Car();
mycar.move();
mycar.honk();
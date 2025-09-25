class Car{
    brand;
    model;

    displayInfo(){
        console.log(`Car Brand = ${this.brand} and Model = ${this.model}`);
        
    }

}

let n = 10;
const c = new Car();
c.brand = "Toyota";
c.model = "Fortuner";
c.displayInfo();
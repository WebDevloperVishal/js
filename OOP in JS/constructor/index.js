class Car {
    brand;
    model;

    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    displayInfo() {
        console.log(`Car Brand = ${this.brand} and Model = ${this.model}`);

    }

}

let n = 10;
const c1 = new Car("Toyota", "Fortuner");
// c.brand = "Toyota";
// c.model = "Fortuner";
c1.displayInfo();

const c2 = new Car("BMW", "BMW M4 - Serices")
// c2.brand = "BMW";
// c2.model = "BMW M4 - Serices"
c2.displayInfo();

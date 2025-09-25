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

const c2 = new Car()
    c2.brand = "BMW";
    c2.model = "BMW M - Serices"
    c2.displayInfo();

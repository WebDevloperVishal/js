class Car{
    brand;
    model;

    constructor(brand,model){
        this.brand = brand;
        this.model = model;
    }

    displayInfo(){
        console.log(`Car Brand = ${this.brand} and Model = ${this.model}`);
        
    }

}

let n = 10;
const c = new Car("Toyota","Fortuner");
// c.brand = "Toyota";
// c.model = "Fortuner";
c.displayInfo();

const c2 = new Car()
    c2.brand = "BMW";
    c2.model = "BMW M4 - Serices"
    c2.displayInfo();

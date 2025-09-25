class Person{
    #name 
    #age;

    setName(name,age){
        this.#name = name;
        this.#age = age;
    }

    getName(){
        console.log(`Name is = ${this.#name} , Age = ${this.#age}`);
        
    }
}

const p = new Person();
p.setName("Aryan",14);
p.getName();
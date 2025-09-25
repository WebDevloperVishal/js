class CoffeeMachine{
    startMachine(){
        console.log("Starting the Machine");
    }
    brewCoffee(){
        console.log("Brawing Coffee");
    }
    makeCoffee(){
        this.startMachine();
        this.brewCoffee();
        console.log('Your Coffee is Ready');
    }
}

const myMachine = new CoffeeMachine();
myMachine.makeCoffee();
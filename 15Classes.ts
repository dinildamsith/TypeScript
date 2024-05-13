interface Vehical{
    horn() : void;
}

class OldCar {
    constructor(){
        console.log("Invoking Super Class Constructor")
    }

    go(): string {
        return "Old Car Is Go"
    }
}

class NewCar extends OldCar implements Vehical{
    horn(): void {
       console.log('new car poooom pooom')
    }

    go(): string {
        return "new car is going"
    }
}

let newCar = new NewCar();
console.log(newCar.go())
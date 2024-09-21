// CLASSES

class ToyotaCar{

    constructor(brand,mileage){
        console.log("Inside the constructor!!");
        this.brand=brand;
    }
    start(){
        console.log("Starting the car.");
    }

    stop(){
        console.log("Stopping the car.");
    }

    setBrand(brand){
        this.brand=brand;     // Can use brandName OR brand , can use same name (brandName is a property of the class) and (brand is the attribute/parameter being passed).    }
    }
}

let fortuner=new ToyotaCar("rolls",10);
//  fortuner.setBrand("Lambo");
console.log(fortuner);

let lexus=new ToyotaCar();
lexus.setBrand("Lambo");
console.log(lexus);

class Devices {
    constructor(avalible,power, name) {
        this.avalible = avalible,
        this.power = power,
        this.name = name
    }
    isPlugIn() {
        if (this.avalible == true) {
            console.log(`${this.name} включен и потребляет ${this.power} Вт`)
    } else {
        console.log(`${this.name}  выключен и потребляет ${this.power - this.power} Вт`)
    }
    }
}
class Iphone extends Devices {
    constructor(avalible, power, name) {
        super(avalible, power, name);
        this.name += ' Max';
    }
}
class MacBook extends Devices {
    constructor(avalible, power, name) {
        super(avalible, power, name);
        this.name += ' Mac';
    }
}
let iphone = new Iphone(true, 65, 'XS')
let macbook = new MacBook(true, 100, 'Pro')
console.log(macbook.isPlugIn())
console.log(iphone.isPlugIn())
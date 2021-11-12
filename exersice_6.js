function Gajet(type,power) {
    this.power = power,
    this.type = type,
    this.enable = false
}

Gajet.prototype = function () {
    if (this.enable == false) {
        this.enable = true;
        console.log(`${this.type} включен`)
    }else {
        this.enable = false;
        console.log(`${this.type} выключен `)
    }
}
function Lamp(type,power) {
    this.type = type,
    this.power = power,
    this.enable = false,
    this.getDesc = function () {
        console.log(`Это ${this.type}. Мощность данного гаджета равна ${this.power} ватт `)
    }
}
function Comp (type,power) {
    this.type = type,
    this.power = power,
    this.getDesc = function() {
        console.log(`Это ${this.type}. Мощность данного гаджета является ${this.power} ватт`)
    }
}
Lamp.prototype = new Gajet();
Comp.prototype = new Gajet()

const tableLamp = new Lamp('Лампа', 5);
const homeComp = new Comp('MacPro', 40)
tableLamp.getDesc()
homeComp.getDesc()

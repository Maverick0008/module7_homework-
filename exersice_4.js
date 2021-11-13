function Device(power) {
    let turnedOn = false
    this.power = power
    let name = ''
    
    this.plugIn = function(power) {
        turnedOn = true
        console.log(`${this.name} включен и потребляет ${this.power} Вт`)
    }
    
    this.turnOff = function(power) {
        turnedOn = false
        console.log(`${this.name} выключен и потребляет ${this,power} Вт`)
    }
}

function Phone(isTurned, power) {
    Device.call(this, power)
    this.power = '65'
    this.name = 'XS Max'
}

function Mac(isTurned, power) {
    Device.call(this)
    this.name = 'MacBook Pro'
}

const IPhone = new Phone()
const MacBook = new Mac()

IPhone.plugIn()
MacBook.turnOff(0)

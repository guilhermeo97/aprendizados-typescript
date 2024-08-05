interface Car{
    make: string;
    model: string;
    year: number;
    getCarInfo: () => string;
}

let palio: Car = {
    make: 'vw',
    model: 'Palio',
    year: 2014,
    getCarInfo: function() {
        return `Make: ${this.make}, Model: ${this.model}, ${this.year}`
    }
}

console.log(palio);
palio.year = 2015;
console.log(palio.year);
console.log(palio['year']);

console.log(palio.getCarInfo());

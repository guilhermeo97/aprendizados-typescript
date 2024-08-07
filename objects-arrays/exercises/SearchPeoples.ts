interface People{
    name: string;
    age: number;
    city: string
}

const peoples: People[] = [
    { name: 'João', age: 30, city: 'São Paulo' },
    { name: 'Maria', age: 25, city: 'Rio de Janeiro' },
    { name: 'Pedro', age: 40, city: 'Belo Horizonte' }
];

let searchPeople: People[] = peoples.filter(people => people.name === 'Maria')

console.log(searchPeople);

// remover objeto do array
const indicePedro = peoples.findIndex(people => people.name === 'Pedro');

if (indicePedro !== -1) {
  peoples.splice(indicePedro, 1);
}
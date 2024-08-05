let numbers: number[] = [10, 20, 30, 40, 50];

let average: number = numbers.reduce((ac, vlr) => (ac + vlr) / numbers.length)
let sum: number = numbers.reduce((ac, vlr) => ac + vlr);
let sub: number = numbers.reduce((ac, vlr) => ac - vlr);
let max: number = numbers.reduce((ac, vlr) => Math.max(ac, vlr));
let min: number = numbers.reduce((ac, vlr) => Math.min(ac, vlr));

console.log("Average:", average);  // 30
console.log("Max:", max);          // 50
console.log("Min:", min);
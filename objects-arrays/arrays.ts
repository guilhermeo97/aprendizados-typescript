let numMaps: number[] = [1, 2, 3, 4, 5]
let numMapsX3: number[] = numMaps.map(num => num * 3);  

console.log(numMaps);
console.log(numMapsX3);

let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let numsM5: number[] = nums.filter(num => num > 5);

console.log(numsM5);

let numbers: number[] = [1, 2, 3, 5];
let product: number = numbers.reduce((acc, num) => acc + num);

console.log(product);

numbers.forEach(number => {
    console.log(number);
})

let i = numbers.values()

for(let j of i){
    console.log(j);
}
    
